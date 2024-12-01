module.exports = {
 async function (sakaki: any ) {
      sakaki.ev.on('messages.upsert', async upsert => {
      const User = upsert.messages.[0].key.remoteJid
    
        console.log(JSON.stringify(upsert, undefined, 2))

        console.log('replying to', User)
        await sakaki.sendMessage(User, { text: 'Hello there!' })
    }); 
  }
};
