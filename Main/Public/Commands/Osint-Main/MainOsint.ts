import { SlashCommandBuilder, EmbedBuilder, } from 'discord.js';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('osint')
    .setDescription('Buscar Dados'),

  async execute(interaction: any) {
     const Menu = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Painel De Osint-Framework')
      .setURL('https://naylor-debian.github.io/Sakaki-Services-Web/main.html')
      .setAuthor({ name: `Clique Aqui !`, iconURL: 'https://i.ibb.co/qs37qDm/undefined-image.png', url: 'https://naylor-debian.github.io/Sakaki-Services-Web/main.html' })
      .setDescription(`T) - Indicates a link to a tool that must be installed and run locally\n(D) - Google Dork, for more information: Google Hacking\n(R) - Requires registration\n(M) - Indicates a URL that contains the search term and the URL itself must be edited manually`)
      .setThumbnail(interaction.user.avatarURL({
        extension: 'webp',
        forceStatic: false,
        size: 1024,
      })
      )
      .setImage('https://i.ibb.co/5G2bWxN/Screenshot-2024-11-15-21-57-33.png')
      .setTimestamp()
      .setFooter({ text: 'All Open Source', iconURL: 'https://i.ibb.co/41CpR5K/901769b2f8a575530b0203c3fdacfd6f-removebg-preview.png' });

    await interaction.reply({ embeds: [Menu], });
  },
};