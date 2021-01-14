const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = module.require("fs");

module.exports = {
  name: "discord",
  description: "A weird command",
  execute(message, args, client) {
        if(message.member.roles.cache.has('736576059427782796')){
            message.channel.send('link');
        } else {
            message.channel.send('I see that you dont have the correct permissions, let me change that!'); message.member.roles.add('736576059427782796').catch(console.error);
        }
  }
}
