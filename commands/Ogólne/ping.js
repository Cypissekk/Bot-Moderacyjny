const { MessageEmbed, Message } = require("discord.js");
const config = require("../../config.json")
const fs = require('fs');

module.exports = {
  config: {
    name: "ping",
    description: "Sprawdzanie pingu",
  },
  run: async (client, message, args) => {

    let member = message.author;

    const ping = new MessageEmbed()
       .setColor(`${config["Konfiguracja"].color}`)  
        .setAuthor(`๐... Sprawdzanie pingu`)

    const pingdone = new MessageEmbed()
        .setColor(`${config["Konfiguracja"].color}`)
        .setAuthor(`โ ${member.tag} - Sukces!`)
        .setDescription(`๐ Twรณj ping: **${Date.now() - message.createdTimestamp - 8800}ms**\n๐ค Ping bota: **${Math.round(client.ws.ping)}ms**`)
        .setFooter(`๐ฆ โธ ${config["Konfiguracja"].name} | Ping`);
    
    message.channel.send(ping)
    .then(message => {
        message.edit(pingdone)
    })
  }
};