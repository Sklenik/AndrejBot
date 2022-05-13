module.exports = {
    name: 'dejkoblihu',
    description: "dá ti koblihu",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#283951')
        .setTitle('Dej si do nosu')
        .setDescription('3 důvody proč si dát koblihu:')
        .addFields(
            {name: '1', value: 'Kobliha je zdravá'},
            {name: '2', value: 'Kobliha je dobrá'},
            {name: '3', value: 'Kobliha je vakcína proti koronaviru'}
        )
        .setImage('https://images-ext-1.discordapp.net/external/IbX1wek3TL9WCxo7foYOWaKGB637vrBHCHxAMM5nMxI/https/media.igurmet.cz/yummy/53/97/5397da6806e50f486e29488e121bb16c.jpg?width=782&height=676')
        .setFooter('Šmakuje co?');
        
        message.channel.send(newEmbed);
        
    }


}