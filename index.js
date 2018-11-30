// Discord.js bot

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setActivity('node.js', {type: 'STREAMING'});


});

client.on('message', msg => {

    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;

    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);

    const args = msg.content.split(' ').slice(1).join(' ');

    if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');

    if (command === 'testing') return msg.channel.send('<a:DiscordHype:516622589473456158>');
    
    if (command === 'prefix') return msg.channel.send(process.env.PREFIX);

    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
// kill me
    module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Sorry, but you do not have the **Manage Messages** permissions! If you think this is an error, contact an owner.')
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send('I do not have the **Manage Messages** permission in this server.');

    if (!args[0]) return message.channel.send('You must specify a number of messages.');
    if (args[0] < 1) return message.channel.send('Please provide a number greater than 1.');
    if (args[0] > 100) return message.channel.send('Please provide a number less than 100.');
    if (isNaN(args[0])) return message.channel.send('Please provide a corect number.');

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`🗑 I delete **${args[0]}** messages.`).then(message => message.delete(3000));
    }).catch().catch((e) => message.channel.send('You can not delete messages older than 14 days.'));

}

module.exports.help = {
    name: "purge",
    category: "moderation"
}
});

client.login(process.env.TOKEN);
