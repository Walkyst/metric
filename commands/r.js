module.exports.run = (client, msg, args) => {
	if (!require('fs').existsSync('/root/bots/metric/commands/' + args[0] + ".js")) return msg.reply(`СЛОЖНА СЛОЖНА НИХУРА НЕ ПОНЯТНО! КОМАНДЫ ${args[0]} НЕТ!`);
	delete require.cache[require.resolve(`/root/bots/metric/commands/${args[0]}.js`)];
	client.commands.delete(args[0]);
  	const props = require(`/root/bots/metric/commands/${args[0]}.js`);
  	client.commands.set(args[0], props);
  	msg.reply(`Команда ${args[0]} был перезапущена!`);

}

module.exports.help = {
  tier: 1,
  cooldown: 100,
  args: 1
}