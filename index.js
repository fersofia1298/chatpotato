const {Client,RichEmbed} = require('discord.js');
const  client = new Client();

client.on('ready',()=>{
    console.log(`the bot its alive:${client.user.tag}`);
    if (client.user.presence.status === 'dnd'){
        console.log('el bot esta invernando', client.user.presence.status);
    }else {
        console.log('el bot esta activo OAO');
    }
    const testChannel = client.channels.find(channel => channel.name=== 'potato');
        console.log('el bot esta activo'); 
});
client.on('message',async message=>{
    console.log(message);
    if (message.content=== 'ping'){
        message.reply('pong');
    }
    if(message.content=== 'hola'){
        message.channel.send(`hola ${message.author} como estan estimad@s potatoes OAO/ `);
    }
    if(message.content.includes(`puto`)){
        message.channel.send(`OYE ${message.author} come jabon oAo`);
    } 
    if(message.content === 'social media'){
        message.channel.send('https://www.chikidi.com.mx/');
        message.channel.send('https://www.youtube.com/watch?v=uxmP4b2a0uY');
    }
    if (message.content === `!pretty`){
        const embed = new RichEmbed()//los mensajes comentados kawaii
        .setTitle('Pretty Message')
        .setColor('#5B43A7')
        .setAuthor('Super Potato','https://ih1.redbubble.net/image.466151952.5957/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg')
        message.channel.send(embed);
    }
     if (message.content === `!clear`){
        const fetched = await message.channel.fetchMessages({limit:100});
        message.channel.bulkDelete(fetched);
        console.log('message delete');
    }
});
client.login('NjUwMDA0OTM3NzQ0NTgwNjA4.XeFCTw.jWHWMzYTszyk8XrMiP60vNj1u4s');


