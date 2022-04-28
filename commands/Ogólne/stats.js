const { MessageEmbed, Message } = require("discord.js");
const config = require("../../config.json")
const fs = require('fs');
const { MessageButton } = require('discord-buttons')

module.exports = {
  config: {
    name: "stats",
    description: "Informacje o bocie/serwerze",
  },
  run: async (client, message, args) => {
      const moment = require("moment");
      require("moment-duration-format");
      const duration = moment.duration(client.uptime).format(" D[d], H[g], m[min]");

      let button = new MessageButton()
        .setStyle('url')
        .setLabel('Sub on YT channel!')
        .setURL('https://www.youtube.com/channel/UCG8wJEboFwJL09UU7PfGacw')

      const info = new MessageEmbed()
        .setColor(`${config["Konfiguracja"].color}`)
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`Autor bota: [**cypissekk__#0001**](https://www.youtube.com/channel/UCG8wJEboFwJL09UU7PfGacw) | <@539069664630669313>\nBot napisany w: **discord.js@12**\nPrefix: **${config["Konfiguracja"].prefix}**`)
        .addField(`Ping bota`, `${Math.round(client.ws.ping)}ms`, true)
        .addField(`Kanały`, client.channels.cache.size, true)
        .addField(`Użytkownicy`, client.users.cache.size, true)
        .addField(`Wersja Bota`, `1.0.0`, true)
        .addField(`Ostatni update`, duration, true)
        .addField(`Na serwerze`, message.guild.name, true)
        .setFooter(`🦊 ▸ ${config["Konfiguracja"].name} | Statystyki`);
	if (message.channel.id !== `${config["Opcje"].MachineChannelID}`) {
        	message.channel.send(info, button)
	}
  }
}