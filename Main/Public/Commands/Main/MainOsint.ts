import { SlashCommandBuilder, EmbedBuilder, } from 'discord.js';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('osint')
    .setDescription('Buscar Dados')
    .addSubcommand(option =>
      option
        .setName('main')
        .setDescription('Menu Osint'))
    .addSubcommand(option2 =>
      option2
        .setName('username')
        .setDescription('Osint Username'))
    .addSubcommand(option3 =>
      option3
        .setName('email')
        .setDescription('Osint Email Address'))
    .addSubcommand(option4 =>
      option4
        .setName('domain')
        .setDescription('Osint Domain Name'))
    .addSubcommand(option5 =>
      option5
        .setName('ip')
        .setDescription('IP & MAC Address')),


  async execute(interaction: any) {
    const SubcommandsOptions = interaction.options.getSubcommand();
    switch (SubcommandsOptions) {

      case 'menu':
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
        break


      case 'username':
        const MenuUsername = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle('Tab Username Osint-Framework')
          .setURL('https://naylor-debian.github.io/Sakaki-Services-Web/main.html')
          .setAuthor({ name: `Clique Aqui !`, iconURL: 'https://i.ibb.co/qs37qDm/undefined-image.png', url: 'https://naylor-debian.github.io/Sakaki-Services-Web/main.html' })
          .setDescription('value')
          .setThumbnail(interaction.user.avatarURL({
            extension: 'webp',
            forceStatic: false,
            size: 1024,
          })
          )
          .setImage('https://i.ibb.co/bHzspXJ/Screenshot-2024-11-16-06-46-22.png')
          .setTimestamp()
          .setFooter({ text: 'All Open Source', iconURL: 'https://i.ibb.co/41CpR5K/901769b2f8a575530b0203c3fdacfd6f-removebg-preview.png' });

        await interaction.reply({ embeds: [MenuUsername], });
        break

      case 'email':
        const MenuEmail = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle('Tab Username Osint-Framework')
          .setURL('https://naylor-debian.github.io/Sakaki-Services-Web/main.html')
          .setAuthor({ name: `Clique Aqui !`, iconURL: 'https://i.ibb.co/qs37qDm/undefined-image.png', url: 'https://naylor-debian.github.io/Sakaki-Services-Web/main.html' })
          .setDescription('value')
          .setThumbnail(interaction.user.avatarURL({
            extension: 'webp',
            forceStatic: false,
            size: 1024,
          })
          )
          .setImage('https://i.ibb.co/pbcrcMK/Screenshot-2024-11-18-18-23-06.png')
          .setTimestamp()
          .setFooter({ text: 'All Open Source', iconURL: 'https://i.ibb.co/41CpR5K/901769b2f8a575530b0203c3fdacfd6f-removebg-preview.png' });

        await interaction.reply({ embeds: [MenuEmail], });
        break

      case 'domain':
        const MenuDoian = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle('Tab Username Osint-Framework')
          .setURL('https://naylor-debian.github.io/Sakaki-Services-Web/main.html')
          .setAuthor({ name: `Clique Aqui !`, iconURL: 'https://i.ibb.co/qs37qDm/undefined-image.png', url: 'https://naylor-debian.github.io/Sakaki-Services-Web/main.html' })
          .setDescription('value')
          .setThumbnail(interaction.user.avatarURL({
            extension: 'webp',
            forceStatic: false,
            size: 1024,
          })
          )
          .setImage('https://i.ibb.co/pbcrcMK/Screenshot-2024-11-18-18-23-06.png')
          .setTimestamp()
          .setFooter({ text: 'All Open Source', iconURL: 'https://i.ibb.co/41CpR5K/901769b2f8a575530b0203c3fdacfd6f-removebg-preview.png' });

        await interaction.reply({ embeds: [MenuDoian], });
        break

    }
  }
};