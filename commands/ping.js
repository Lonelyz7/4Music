const { MessageCollector, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  cooldown: 10,
  description: "Show the bot's average ping",
  execute(message) {
    const embed = new MessageEmbed()
    .setColor('2F3136')
    .setThumbnail('https://media.discordapp.net/attachments/747094092596510841/767079159977082910/2102a19ea556e1d1c54f40a3eda0d775.gif')
    .setTitle("**__» • Ping:__**")
    .setDescription(`${Math.round(message.client.ws.ping)} ms`)
    .setFooter(`4Music`, `https://media.discordapp.net/attachments/760544842366976083/799027722575151134/image0.gif`)
    .setTimestamp()
    message.channel.send(embed).catch(console.error);
  }
};