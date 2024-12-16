import Sakaki from './sakaki';

async function main() {
    const bot = new Sakaki();
    await bot.initialize();
    console.log('Sakaki bot is ready!');
}

main();
