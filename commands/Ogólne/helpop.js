const { MessageEmbed, Message } = require("discord.js");
const config = require("../../config.json")
const fs = require('fs');

module.exports = {
  config: {
    name: "helpop",
    description: "2",
  },
  run: async (client, message, args) => {

    const wrong = new MessageEmbed()
    .setColor(`${config["Konfiguracja"].color}`)
    .setAuthor(`${config["Konfiguracja"].name} - Blad!`)
    .setDescription(`⛔ Poprawne uzycie: <Wiadomosc do wlasiciela>`)
    .setFooter(`🦊 ▸ ${config["Konfiguracja"].name} | Send`);

    if (args.length < 1) return message.channel.send(wrong);

    let helpop = args.splice(0).join(" ")
    
        const send = new MessageEmbed()
            .setTitle("Helpop")
            .setColor(`${config["Konfiguracja"].color}`)
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .setDescription(helpop)
            .setThumbnail("https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg");

        const log = new MessageEmbed()
            .setAuthor('Nowa wiadomosc helpop') 
            .setColor(`${config["Konfiguracja"].color}`)
            .setDescription(`Nowa wiadomosc helpop\n> Uzytkownik: **${message.author}**\n> Wiadomosc: ${helpop}`)
            .setFooter('Log')


            client.users.fetch(`${config["Opcje"].OwnerID}`, false).then((user) => {
                user.send(send);
               });
               client.channels.cache.get(`${config["Opcje"].LogChannelID}`).send({ embed: log })
        }

}


