const Discord = require('discord.js');

const{prefix,token}=require('./config.json');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

client.login(token);

client.once('ready', () => {
 console.log('Ready!');
});
client.once('reconnecting', () => {
 console.log('Reconnecting!');
});
client.once('disconnect', () => {
 console.log('Disconnect!');
});


client.on('message', async message =>{

 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

 const serverQueue = queue.get(message.guild.id);

 if (message.content.startsWith(`${prefix}play`)) {
     execute(message, serverQueue);
	message.channel.send("foi");
     return;
 } else if (message.content.startsWith(`${prefix}skip`)) {
     skip(message, serverQueue);
	message.channel.send("foi");
     return;
 } else if (message.content.startsWith(`${prefix}stop`)) {
     stop(message, serverQueue);
	message.channel.send("foi");
     return;
 } else {
     message.channel.send("You need to enter a valid command!");
 }

const queue = new Map();

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }
}

const songInfo = await ytdl.getInfo(args[1]);
const song = {
 title: songInfo.title,
 url: songInfo.video_url,
};




//41
//42
})
//43
//44
