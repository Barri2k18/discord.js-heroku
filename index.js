// Discord.js bot

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('node.js', {type: 'STREAMING'});


});

client.on('message', msg => {
    
    if(message.author.bot) return;
    
    if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }

    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;

    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);

    const args = msg.content.split(' ').slice(1).join(' ');

    if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');

    if (command === 'testing') return msg.channel.send('<a:DiscordHype:516622589473456158>');
    
    if (command === 'prefix') return msg.channel.send(process.env.PREFIX);

    else if (command === 'invite') return msg.channel.send(process.env.INVITE);
// kill me
});

client.login(process.env.TOKEN);
