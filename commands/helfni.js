module.exports = {
    name: 'helfni',
    description: "vypíše příkazy",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#283951')
        .setTitle('Čo po mne chcete?')
        .setDescription('Pred tie príkazy napíšte "-" inak to nebude fungovať!')
        .addFields(
            {name: 'daně', value: 'Hádaj čo.'},
            {name:'ano', value: ':)'},
            {name:'čus', value: 'Pozdravím ťa.'},
            {name:'ping', value: 'Toto nebudem komentovať.'},
            {name:'helfni', value: 'Vypíše tento zoznam.'},
            {name:'dejkoblihu', value: 'Dej si do nosu!'}
        )
        .setImage('https://img.cncenter.cz/foto/andrej-babis-korunove-dluhopisy-dopis-snemovna/MHgwL3NtYXJ0L3RoYg/1-normal620-3401735.jpg?v=1&st=J_h0yFU7B7n6VUMQNkf0sBwGC9I5FqhFBYitrQni9jI&ts=1600812000&e=0')
        .setFooter('Za všechno může Kalousek.');
        
        message.channel.send(newEmbed);
        
    }


}