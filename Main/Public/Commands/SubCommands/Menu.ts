module.exports = {
  data: { name: "menu" },
  execute: async (client: any, msg: any, args: string[]) => {
    const from = msg.key.remoteJid;
    await client.sendMessage(from, { text: "Olá! Você chamou o comando hello!" });
  },
};
