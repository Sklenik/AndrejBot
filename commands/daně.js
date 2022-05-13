module.exports = {
    name: 'daně',
    description: "zaplatí daně",
    execute(message, args) {
        message.channel.send('nezaplatím!');
    }
}