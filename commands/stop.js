const { canModifyQueue } = require("../util/LonelyzbotUtil");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stops the music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    const embed = new MessageEmbed()
    .setDescription(`IThere's nothing I could stop playing for you.`)
    .setFooter(`Something went wrong :(`)
    .setColor('2F3136');
    if (!queue) return message.reply(embed).catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    const embed2 = new MessageEmbed()
    .setDescription(`I did leave the voice channek, if you want to listen to music \`h24/7.`)
    .setFooter(`Something went wrong :(`)
    .setColor('2F3136');
    queue.textChannel.send(embed2).catch(console.error);
  }
};