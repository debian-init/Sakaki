import { SlashCommandBuilder, EmbedBuilder, } from 'discord.js';


module.exports = {
    data: new SlashCommandBuilder()
        .setName("menu")
        .setDescription('Command Main !'),

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
                { name: 'Subcommands', value: '/subcommands' },
                { name: 'Moderaction', value: '/moderaction' },
                { name: '\u200B', value: '\u200B', inline: true },
                { name: '\u200B', value: '\u200B', inline: true },
            )
            .addFields({ name: '\u200B', value: '\u200B', inline: true })
            .setImage('https://i.ibb.co/xmXhwQ3/undefined-image.png')
            .setTimestamp()
            .setFooter({ text: 'All Open Source', iconURL: 'https://i.ibb.co/41CpR5K/901769b2f8a575530b0203c3fdacfd6f-removebg-preview.png' });

        await interaction.reply({ embeds: [Menu] });
    },
};