import { Events } from 'discord.js';

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(sakaki: any) {
		console.log(`Ready! Logged in as ${sakaki.user.tag}`);
	},
};
