const keep_alive = require('./keep_alive.js')

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Zdarec!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);

    } else if (command == 'daně'){
        client.commands.get('daně').execute(message, args);
    
    } else if (command == 'čus'){
        client.commands.get('čus').execute(message, args);

    } else if (command == 'dejkoblihu'){
        client.commands.get('dejkoblihu').execute(message, args, Discord);

    } else if (command == 'ano'){
        client.commands.get('ano').execute(message, args);

    } else if (command == 'helfni'){
        client.commands.get('helfni').execute(message, args, Discord);
    }

});

client.login('ODA5NDc2OTUyMzIyNDc0MDQ0.YCVqKA.s7lDnsJMQh9jqNzR4kwvETDF5nY');