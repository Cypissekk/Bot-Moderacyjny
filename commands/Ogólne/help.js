const { MessageEmbed, Message } = require("discord.js");
const config = require("../../config.json")
const fs = require('fs');
const { MessageButton } = require('discord-buttons')

module.exports = {
  config: {
    name: "help",
    description: "Pomocne komendy",
  },
  run: async (client, message, args) => {
    let button = new MessageButton()
    .setStyle('url')
    .setLabel('Sub on YT channel!')
    .setURL('https://www.youtube.com/channel/UCG8wJEboFwJL09UU7PfGacw')
    
    

    const help = new MessageEmbed()
        .setColor(`${config["Konfiguracja"].color}`)
        .setAuthor(`${config["Konfiguracja"].name} - POMOC`)
        .setThumbnail(`${client.user.displayAvatarURL()}`)
        .setDescription(`**Komendy** do wykorzystania na tym serwerze!\n> **${config["Konfiguracja"].prefix}helpop** - Wyslanie wiadomosci do wlasciciela\n> **${config["Konfiguracja"].prefix}Invite** - Wyslanie zaproszenia na serwer \n> **${config["Konfiguracja"].prefix}stats** - Wyslanie statystyk serwera!`)
        .setFooter(`🦊 ▸ ${config["Konfiguracja"].name} | Pomoc`)

        message.channel.send(help, button)

    } }
  
