const { MessageEmbed, Message } = require("discord.js");
const config = require("../../config.json")
const fs = require('fs');

module.exports = {
    config: {
        name: "ban",
        description: "Komenda do banowania kogos",
    },
    run: async (bot, message, args) => {
        try {
            if (!message.member.hasPermission("BAN_MEMBERS") && !ownerID .includes(message.author.id)) return message.channel.send("**⛔ Nie masz permisji do banowania!**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("⛔ Brak Uprawnien!");
            if (!args[0]) return message.channel.send("⛔ Correct Usage: **<User> <reason>**")

            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("⛔ Nie ma takiego uzytkownika!");
            if (banMember === message.member) return message.channel.send("**⛔ You cannot ban yourself!**")

            var reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send("⛔ You can ban this user!")
            try {
            message.guild.members.ban(banMember)
            banMember.send(`Hello, You just got banned from **${message.guild.name}** za - **${reason || "bez powodu"}**`).catch(() => null)
            } catch {
                message.guild.members.ban(banMember)
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${banMember.user.username}** zostal zbanowany za ${reason}`)
            message.channel.send(sembed)
        } else {
                var sembed2 = new MessageEmbed()
                .setColor(`${config["Konfiguracja"].color}`)
                .setDescription(`**${banMember.user.username}** zostal zbanowany`)
            message.channel.send(sembed2)
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (channel == null) return;

            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(banMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "ban")
                .addField("**Zbanowany**", banMember.user.username)
                .addField("**ID**", `${banMember.id}`)
                .addField("**Zbanowany za**", message.author.username)
                .addField("**Powod**", `${reason || "**No Reason**"}`)
                .addField("**Data**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
};