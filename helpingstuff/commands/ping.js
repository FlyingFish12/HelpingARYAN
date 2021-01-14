const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = module.require("fs");

module.exports = {
  name: "ping",
  description: "A ping command",
  execute(message, args, client) {
      message.channel.send('pong!');
  }
}
