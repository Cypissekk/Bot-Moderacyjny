const { MessageEmbed, Message } = require("discord.js");
const config = require("../../config.json")
const fs = require('fs');

module.exports = {
  config: {
    name: "invite",
    description: "Wyslanie zaproszenia na serwer",
  },
  run: async (client, message, args) => {

    let member = message.author;

    const invite = new MessageEmbed()
        .setColor(`${config["Konfiguracja"].color}`)
        .setAuthor(`🏓... Wysylanie zaproszenia`)

    const invitedone = new MessageEmbed()
        .setColor(`${config["Konfiguracja"].color}`)
        .setAuthor(`✅ ${member.tag} - Sukces!`)
        .setDescription(`🏓 ${config["Opcje"].Invite}`)
        .setFooter(`🦊 ▸ ${config["Konfiguracja"].name} | Zaproszenie`);
    
    message.channel.send(invite)
    .then(message => {
        message.edit(invitedone)
    })
  }
};