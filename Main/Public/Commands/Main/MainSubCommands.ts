import { SlashCommandBuilder, EmbedBuilder, } from 'discord.js';


module.exports = {
    data: new SlashCommandBuilder()
        .setName('subcommands')
        .setDescription('Options SubCommands'),

    async execute(interaction: any) {
        const Menu = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`Ola ${interaction.user.globalName}`)
            .setURL('https://naylor-debian.github.io/Sakaki-Services-Web/main.html')
            .setAuthor({ name: `Clique Aqui !`, iconURL: 'https://i.ibb.co/qs37qDm/undefined-image.png', url: 'https://naylor-debian.github.io/Sakaki-Services-Web/main.html' })
            .setDescription('Sakaki foi desenvolvida com um unico objetivo, atender as suas necessidades virtuais.')
            .setThumbnail(interaction.user.avatarURL({
                extension: 'webp',
                forceStatic: false,
                size: 1024,
            })
            )
            .addFields(
                { name: 'Painel De Osint', value: '/osint' },
                { name: '\u200B', value: '\u200B' },
                { name: '\u200B', value: '\u200B', inline: true },
                { name: '\u200B', value: '\u200B', inline: true },
            )
            .addFields({ name: '\u200B', value: '\u200B', inline: true })
            .setImage('https://i.ibb.co/WDcwBs4/98916379c2d3e2d5943d7424e63b1598-high.webp')
            .setTimestamp()
            .setFooter({ text: 'All Open Source', iconURL: 'https://i.ibb.co/41CpR5K/901769b2f8a575530b0203c3fdacfd6f-removebg-preview.png' });

        await interaction.reply({ embeds: [Menu] });

    },
};