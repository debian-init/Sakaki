import { SlashCommandBuilder, EmbedBuilder, } from 'discord.js';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('email')
    .setDescription('Osint Email Address'),

  async execute(interaction: any) {
     const Menu = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Tab Username Osint-Framework')
      .setURL('https://naylor-debian.github.io/Sakaki-Services-Web/main.html')
      .setAuthor({ name: `Clique Aqui !`, iconURL: 'https://i.ibb.co/qs37qDm/undefined-image.png', url: 'https://naylor-debian.github.io/Sakaki-Services-Web/main.html' })
      .setDescription('.')
      .setThumbnail(interaction.user.avatarURL({
        extension: 'webp',
        forceStatic: false,
        size: 1024,
      })
      )
      .setImage('https://i.ibb.co/bHzspXJ/Screenshot-2024-11-16-06-46-22.png')
      .setTimestamp()
      .setFooter({ text: 'All Open Source', iconURL: 'https://i.ibb.co/41CpR5K/901769b2f8a575530b0203c3fdacfd6f-removebg-preview.png' });

    await interaction.reply({ embeds: [Menu], });
  },
};