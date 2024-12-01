const { apiId, apiHash, Session, } = require ('./config.json'); 
const { TelegramClient, Api, } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input"); // npm i input
const stringSession = new StringSession(Session); 
// fill this later with the value from session.save()

async function Start () {
  console.log("Loading interactive example...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });

  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err: any) => console.log(err),
  });
  console.log("You should now be connected.");
  //console.log(client.session.save()); // Save this string to avoid logging in again
  console.log(client);


const messages = await client.getMessages(chat, {ids: undefined });
const messagesData = messages[0];
console.log(messages);
  
  
} Start();
