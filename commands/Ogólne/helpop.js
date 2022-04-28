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
    
        const send = new MessageEmbed()
            .setColor(`${config["Konfiguracja"].color}`)
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .setDescription(args.splice(0).join(" "))
            .setThumbnail("https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg");
            client.users.fetch('539069664630669313', false).then((user) => {
                user.send(send);
               });
        }

}
