module.exports = { 
  async function (sakaki: any) {
   sakaki.ev.on('connection.update', async (update: any) => {
        const { connection, lastDisconnect } = update
        if(connection === 'close') {
            const shouldReconnect = (lastDisconnect.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut
            console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect)
            // reconnect if not logged out
            if(shouldReconnect) {
                StartBaileys()
            }
        } else if(connection === 'open') {
            console.log('opened connection')
        }
    })
}};
