// Require the necessary discord.js classes
import fs from 'node:fs';
import path from 'node:path';
import Sequelize from 'sequelize';
const { token, clientId } = require('./config.json');
const { Client, Collection, GatewayIntentBits } = require('discord.js');


// Create a new client instance
const sakaki = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

sakaki.commands = new Collection();
//Carregando Commands
const foldersPath = path.join(__dirname, 'Main/Public/Commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter((file: any) => file.endsWith('.ts'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			sakaki.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

//Carregando Events
const eventsPath = path.join(__dirname, 'Main/Public/Events');
const eventFiles = fs.readdirSync(eventsPath).filter((file: any) => file.endsWith('.ts'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		sakaki.once(event.name, (...args: any) => event.execute(...args));
	} else {
		sakaki.on(event.name, (...args: any) => event.execute(...args));
	}
}

// Log in to Discord with your client's token
sakaki.login(token);