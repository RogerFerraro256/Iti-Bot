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

 if (message.author.bot){
   console.log(message);
 };
 if (!message.content.startsWith(prefix)){
  console.log(message);
 };
 
 if(message.author.id=='670815053926367249'){
  message.channel.send("Gi amo você");
 }
 if (message.content.startsWith(prefix)){
   message.channel.send("prefixo usado");
   console.log(message);
 };
 

})
//43
//44
