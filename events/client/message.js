const { MessageEmbed, VoiceBroadcast } = require("discord.js");
const { MessageButton } = require('discord-buttons')
const config = require("../../config.json");
module.exports = async (client, message) => {
    let user = message.author;
    let avatar = user.displayAvatarURL({size:1024});

    if (message.channel.id == `${config["Opcje"].MachineChannelID}` && message.author.id !== `${config["Opcje"].BotID}`) {
        message.delete() 
    }

    if (message.channel.id === `${config["Opcje"].SuggestionChannelID}` && message.author.id !== `${config["Opcje"].BotID}`) {
        message.delete();
        const suggest = new MessageEmbed()
            .setColor(`${config["Konfiguracja"].color}`)
            .setAuthor(`Sugestia od: ${message.author.username}`, avatar)
            .setDescription(`${message.content}`)
            .setFooter(`Zareaguj reakcjami ponizej`, client.user.displayAvatarURL())
        message.reply({ embed: suggest })
        .then(message=> {
            message.react("✅")
            message.react("❌")
        })
    }
}
