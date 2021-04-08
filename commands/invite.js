const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "invite",
  description: "Send bot invite link",
  execute(message) {
    let helpEmbed = new MessageEmbed()
  .setTitle(`✔️ Lien`)
  .setColor(("2F3136"))
  .addField(`:arrow_right: **Support Server**`, `[Cliquez ici](https://discord.gg/B2zj28B8ts)`)
  .addField(`:arrow_right: **Bot Invite**`, `[Cliquez ici](https://discord.com/api/oauth2/authorize?client_id=829652330277371905&permissions=8&scope=bot)`)
message.channel.send(helpEmbed)
  }
};