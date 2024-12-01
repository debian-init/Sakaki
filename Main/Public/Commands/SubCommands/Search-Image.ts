import { SlashCommandBuilder, EmbedBuilder, } from 'discord.js';
const { search } = require("pinterest-dl");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('photo')
        .setDescription('Search Image')
        .addSubcommand(option =>
            option
                .setName('pinterest')
                .setDescription('Photo Of Pinterest')
                .addStringOption(string =>
                    string
                        .setName('name')
                        .setDescription('input')
                        .setRequired(true)
                )),

    async execute(interaction: any) {
        const Subcommand = interaction.options.getSubcommand();
        const DataSearch = `Konatan izumi`;
        switch (Subcommand) {

            case 'pinterest':
                async function main() {
                    const data = await search(DataSearch);
                    console.log(data);
                    console.log(interaction);
                    const MenuPinterest = new EmbedBuilder()
                        .setColor(0x0099FF)
                        .setTitle('Painel De Osint-Framework')
                        .setURL('https://naylor-debian.github.io/Sakaki-Services-Web/main.html')
                        .setAuthor({ name: `Clique Aqui !`, iconURL: 'https://i.ibb.co/qs37qDm/undefined-image.png', url: 'https://naylor-debian.github.io/Sakaki-Services-Web/main.html' })
                        .setDescription(`(T)`)
                        .setThumbnail(interaction.user.avatarURL({
                            extension: 'webp',
                            forceStatic: false,
                            size: 1024,
                        })
                        )
                        .setImage(data[0])
                        .setTimestamp()
                        .setFooter({ text: 'All Open Source', iconURL: 'https://i.ibb.co/41CpR5K/901769b2f8a575530b0203c3fdacfd6f-removebg-preview.png' });


                    await interaction.reply({ embeds: [MenuPinterest], });


                } main();
                break;

        }
    }
};