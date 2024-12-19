import fs from 'fs';
import path from 'path';
const foldersPath = path.join(__dirname, '../../Public/Commands');
import { DisconnectReason, makeWASocket, useMultiFileAuthState, MessageType, PollMessageOptions } from '@whiskeysockets/baileys';


class Client {
  public client: any;

  public async Start() {
    try {
      const { state, saveCreds } = await useMultiFileAuthState('Main/Private/Database/Connection');
      this.client = makeWASocket({
        printQRInTerminal: true,
        auth: state,
      });

      this.client.commands = new Map();
      await this.LoadCommands();
      this.client.ev.on('creds.update', saveCreds);
      this.client.ev.on('connection.update', (update: any) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
          const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
          console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect)
          // reconnect if not logged out
          if (shouldReconnect) {
            this.Start();
          }
        } else if (connection === 'open') {
          console.log('opened connection')
        }
      })
      this.Messages();
    } catch (error) {
      console.error('Erro ao iniciar o cliente:', error);

    }
  } //public async Start


  public async Messages() {
    this.client.ev.on('messages.upsert', async (event: any) => {
      //Predefiçoes
      const msg = event.messages[0];
      const from: any = msg.key.remoteJid;
      const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';
      //Event Messages 
      console.log(JSON.stringify(msg, undefined, 2))
      console.log(`Received message from ${from}: ${text}`);
      const args = text.trim().split(/\s+/); // Dividir texto em argumentos
      const commandName = args.shift()?.toLowerCase(); // Nome do comando

      console.log(`Mensagem recebida de ${from}: ${text}`);
      // Verificar se o comando existe no mapa
      const command = this.client.commands.get(commandName);
      if (!command) return; // Ignorar se o comando não estiver registrado

      // Executar o comando
      try {
        await command.execute(this.client, msg, args);
      } catch (error) {
        console.error(`Erro ao executar o comando ${commandName}:`, error);
      }


    });

  } //public async Messages


  public async LoadCommands() {
    try {
      // Carregando Comandos
      const commandFolders = await fs.readdirSync(foldersPath);
      for (const folder of commandFolders) {
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));
        for (const file of commandFiles) {
          const filePath = path.join(commandsPath, file);
          const command = require(filePath);

          //Executando Command 
          if ('data' in command && 'execute' in command) {
            this.client.commands.set(command.data.name.toLowerCase(), command);
          } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
          }

        }
      }
      
      console.log('Comandos carregados com sucesso!');
    }
    catch (error: any) {
      console.error("Error loading commands:", error);
    }

  }






} export default Client; 
