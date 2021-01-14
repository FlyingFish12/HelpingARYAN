const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const fs = require("fs");
const prefix = "f!";
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("I'm ALIVE")
});

client.on("message", (message) => {
  if (!message.content.toLowerCase().startsWith(`${prefix}`)) return;
  if (message.author.bot) return;

  const args = message.content.trim().split(/ +/g);

  const commandName = args[0].slice(prefix.length).toLowerCase();
  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  command.execute(message, args, client);

});

client.login('token');
