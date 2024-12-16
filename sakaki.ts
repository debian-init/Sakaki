import fs from 'fs';
import P from 'pino';
import path from 'path';
import NodeCache from 'node-cache';
import {  makeInMemoryStore, fetchLatestBaileysVersion, makeWASocket, makeCacheableSignalKeyStore, useMultiFileAuthState, AnyMessageContent } from '@whiskeysockets/baileys';

public class Sakaki {
    private sakaki: any;
    private store: any;
    private logger: any;
    private msgRetryCounterCache: NodeCache;

    constructor() {
        this.logger = P({ timestamp: () => `,"time":"${new Date().toJSON()}"` });
        this.logger.level = 'trace';

        this.msgRetryCounterCache = new NodeCache();

        // Store initialization
    this.store = makeInMemoryStore({ logger: this.logger });

        // Read the store from file periodically
        this.store?.readFromFile('./Main/Private/Database/Store/baileys_store_multi.json');
        setInterval(() => {
            this.store?.writeToFile('./Main/Private/Lib/Store/baileys_store_multi.json');
        }, 10_000);
    }

    async initialize() {
        const { state, saveCreds } = await useMultiFileAuthState('./Main/Private/Database/Connection');
        const { version, isLatest } = await fetchLatestBaileysVersion();
        console.log(`Using WA version ${version.join('.')}, isLatest: ${isLatest}`);

        this.sakaki = makeWASocket({
            version,
            logger: this.logger,
            auth: {
                creds: state.creds,
                keys: makeCacheableSignalKeyStore(state.keys, this.logger),
            },
            msgRetryCounterCache: this.msgRetryCounterCache,
        });

        this.sakaki.saveCreds = saveCreds;

        // Bind events
        this.store?.bind(this.sakaki.ev);

        console.log('Sakaki initialized');
    }

    // Example of sending a message
    async sendMessage(jid: string, message: AnyMessageContent) {
        if (!this.sakaki) {
            throw new Error('Bot not initialized. Call initialize() first.');
        }

        await this.sakaki.presenceSubscribe(jid);
        await this.sakaki.sendPresenceUpdate('composing', jid);
        await this.sakaki.sendMessage(jid, message);
    }

    // Handle messages
    onMessage(handler: (message: any) => void) {
        this.sakaki.ev.on('messages.upsert', async (event: any) => {
            for (const msg of event.messages) {
                await handler(msg);
            }
        });
    }
}

export default Sakaki;
