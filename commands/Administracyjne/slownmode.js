const Discord = require('discord.js');
require('discord-reply');

module.exports = {
    config: {
      name: "slownmode",
      description: "Zmiana czasu wysylania",
    },
    run: async (client, message, args) => {
    
        const time = args[0];
        if (message.member.roles.cache.has(`${config["Opcje"].AdminIDRole}`)) {
        if (!time) return message.lineReply(`\`[ ❌ ]\` Musisz wprowadzić na ile sekund chcesz ustawić slowmode!`);

        if (isNaN(time)) return message.lineReply(`\`[ ❌ ]\` Musisz wprowadzić poprawny czas, na ile sekund chcesz ustawić slowmode`);

        message.channel.setRateLimitPerUser(time);

        message.lineReply(`\`[ ✔️ ]\` Pomyślnie ustawiono slowmode na **${time}s**!`)
    }
}}