// Discord.js bot

const Discord = require('discord.js');

const client = new Discord.Client();

//client.on('ready', () => {

//    client.user.setActivity('node.js', {type: 'STREAMING'});

client.on('ready', function() {
      setInterval(async () => {
    const statuslist = [
      `<help | ${bot.guilds.size} guilds`,
      `<help | ${bot.channels.size} channels`,
      `<help | ${bot.users.size} users`
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await bot.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "STREAMING"
          //url: 'https://www.twitch.tv/spokloo'
        },
        status: "idle"
      });
    } catch (error) {
      console.error(error);

});

client.on('message', msg => {

    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;

    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);

    const args = msg.content.split(' ').slice(1).join(' ');

    if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');

    if (command === 'testing') return msg.channel.send('<a:DiscordHype:516622589473456158>');
    
    if (command === 'prefix') return msg.channel.send(process.env.PREFIX);

    else if (command === 'invite') return msg.channel.send(process.env.INVITE);

});

client.login(process.env.TOKEN);
