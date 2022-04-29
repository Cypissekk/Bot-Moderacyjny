const { MessageEmbed, Message } = require("discord.js");
const config = require("../../config.json")
const fs = require('fs');

module.exports = {
    config: {
        name: "ban",
        description: "Komenda do banowania kogos",
    },
    run: async (client, message, args) => {

       var user = args[0];
       var powod = args.slice(1).join(" ");
    

       let ping = message.author
       

       const perms = new MessageEmbed()
       .setAuthor('❌ Brak uprawnien')    
       .setColor(`${config["Konfiguracja"].color}`)
       .setDescription('<@' + ping + '>' + '\n\nNie posiadasz uprawnien!')

       const siebie = new MessageEmbed()
       .setTitle("❌ Nie mozesz zbanowac siebie!")
       .setColor(`${config["Konfiguracja"].color}`)

       const dm = new MessageEmbed()
       .setAuthor('Zostales zbanowany!')
       .setColor(`${config["Konfiguracja"].color}`)
       .setDescription(`Witaj ${user}, informuje ze zostales zbanowany\n> Serwer: **${message.guild.name}**\n> Administrator: **${message.author}**\n> Powod: **${powod || "Bez powodu"}** `)

       const blad = new MessageEmbed()
       .setTitle("❌ Nie ma takiego uzytkownika!")
       .setColor(`${config["Konfiguracja"].color}`)


       const usage = new MessageEmbed()
       .setAuthor('❌ Nie poprawne uzycie!')    
       .setColor(`${config["Konfiguracja"].color}`)
       .setDescription('Poprawne uzycie: ' + '`' + config["Konfiguracja"].prefix + 'ban <Uzytkownik> <Powod bana>' + '`')

       const log = new MessageEmbed()
       .setAuthor('Nowe zbanowanie')    
       .setColor(`${config["Konfiguracja"].color}`)
       .setDescription(`Nowe zbanowanie\n **Administrator**: ${message.author}\n **Kogo**: ${user}\n **Powod**: ${powod || "bez powodu"}`)
       .setFooter('Log')

       const done = new MessageEmbed()
       .setAuthor('✅ Sukces!')    
       .setColor(`${config["Konfiguracja"].color}`)
       .setDescription(`Pomyslnie zbanowales uzytkownika: ${user} za: ${powod}`)


       if (!message.member.roles.cache.has(`${config["Opcje"].AdminIDRole}`)) {
        message.channel.send(perms)
       }
       
       if (message.member.roles.cache.has(`${config["Opcje"].AdminIDRole}`)) {


        if (!args[0]) return message.channel.send(usage)
    
            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send(blad);
            if (banMember === message.member) return message.channel.send(siebie)

                await client.channels.cache.get(`${config["Opcje"].LogChannelID}`).send({ embed: log })
                 await banMember.send(dm)
                 await message.channel.send(done)
                message.guild.members.ban(banMember)
                
        
       }
       

    }

}