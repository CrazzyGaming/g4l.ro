const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '/panel') {
    	message.reply('Panelul este in lucru.');
  	}
});

client.on('message', message => {
    if (message.content === '/forum') {
    	message.reply('Forumul este in lucru.');
  	}
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
