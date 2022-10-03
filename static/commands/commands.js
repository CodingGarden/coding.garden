/* eslint-disable */
var url = 'https://coding-garden-commands.vercel.app/api/commands';

var ignoredCommands = {};

var renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
	return (
		'<a target="_blank" rel="noopener" href="' + href + '" title="' + title + '">' + text + '</a>'
	);
};

function getCommands() {
	return fetch(url)
		.then(function (response) {
			return response.json();
		})
		.then(function (results) {
			var commands = results
				.filter(function (command) {
					if (
						command.response &&
						(!command.permission ||
							(command.permission.level === 1 && !ignoredCommands[command.command]))
					) {
						command.html = marked(command.response, { renderer: renderer });
						return true;
					}
					return false;
				})
				.sort(function (a, b) {
					if (a.command > b.command) return 1;
					if (a.command < b.command) return -1;
					return 0;
				});
			return commands;
		});
}

new Vue({
	el: '#app',
	data: {
		filter: '',
		commands: [
			{
				command: 'Loading...',
				html: 'Loading...'
			}
		]
	},
	created: function () {
		var self = this;
		getCommands().then(function (commands) {
			self.commands = commands;
		});
	},
	computed: {
		filteredCommands: function () {
			if (!this.filter) return this.commands;
			const regexp = new RegExp(this.filter, 'gi');
			return this.commands.filter(function (command) {
				return command.command.match(regexp) || command.response.match(regexp);
			});
		}
	}
});
