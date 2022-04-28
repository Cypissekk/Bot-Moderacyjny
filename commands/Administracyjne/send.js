const { MessageEmbed, Message, Guild } = require("discord.js");
const config = require("../../config.json")
const fs = require('fs');


module.exports = {
  config: {
    name: "send",
    description: "Wysylanie komendy embed",
  },
  run: async (client, message, args) => {
  


    const wrong = new MessageEmbed()
    .setColor(`${config["Konfiguracja"].color}`)
    .setAuthor(`${config["Konfiguracja"].name} - Blad!`)
    .setDescription(`⛔ Poprawne uzycie: <Wiadomosc>`)
    .setFooter(`🦊 ▸ ${config["Konfiguracja"].name} | Send`);

    const senddone = new MessageEmbed()
    .setColor(`${config["Konfiguracja"].color}`)
    .setAuthor(`Ogloszenie - Gotowe!✅`)
    .setDescription(`⛔ Pomyslnie wyslano wiadomosc na kanal Ogloszeniowy!📣`)
    .setFooter(`🦊 ▸ ${config["Konfiguracja"].name} | Send`);


    const perms = new MessageEmbed()
    .setColor(`${config["Konfiguracja"].color}`)
    .setAuthor(`${config["Konfiguracja"].name} - Blad!`)
    .setDescription(`⛔ Brak Uprawnien!`)
    .setFooter(`🦊 ▸ ${config["Konfiguracja"].name} | Send`);

    message.delete()
    if (args.length < 1) return message.channel.send(wrong)
    if (message.member.roles.cache.has(`${config["Opcje"].AdminIDRole}`)) {
    const send = new MessageEmbed()
        .setTitle('Ogloszenie!📣')
        .setDescription(args.splice(0).join(" "))
        .setFooter('Ogloszenie na serwerze: ' + '<' + message.guild.name + '>')
        .setColor(`${config["Konfiguracja"].color}`)

        client.channels.cache.get(`957703895453425664`).send(send)
        message.channel.send(senddone)

    }
    else { 
      message.channel.send(perms)
    }

      


    } }

  
