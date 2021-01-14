const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports={
    name: 'help',
    description: "An help command",
    execute(message,args,client){
        const Embed = new Discord.MessageEmbed()
        .setColor(`#DA005A`)
        .setTitle("title anyone?")
        .setDescription("a description")
        .setFooter("whatever footer you want!")
        .setTimestamp()
  message.channel.send(Embed)
    }
}