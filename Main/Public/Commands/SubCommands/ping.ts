module.exports = {
    data: {
      name: 'ping',
    },
    execute: async (client: any, msg: any, args: string[]) => {
      await client.sendMessage(msg.key.remoteJid, { text: 'Pong!' });
    },
  };
  