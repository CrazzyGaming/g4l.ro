const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '/panel') {
    	message.reply('Panelul nostru este panel.g4l.ro.');
  	}
});

client.on('message', message => {
    if (message.content === '/forum') {
    	message.reply('Forumul nostru este forum.g4l.ro.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
