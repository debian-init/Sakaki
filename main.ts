const { makeWASocket, DisconnectReason, BufferJSON, useMultiFileAuthState,  } = require('@whiskeysockets/baileys');
const fs = require('fs');


async function Start() {
    const { state, saveCreds } = await useMultiFileAuthState('Lib/Public/DataBase/Bayleys/Connection');
 
    const sakaki = makeWASocket({
        // can provide additional config here
        printQRInTerminal: true,
        auth: state
    });
     
// run in main file
} Start()
