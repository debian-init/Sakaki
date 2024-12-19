import { text } from 'stream/consumers';
import Client from './Main/Class/Client/Client';

async function Main() {
    const sakaki = new Client();
    await sakaki.Start();

} Main();
