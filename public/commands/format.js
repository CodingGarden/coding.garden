const fs = require('fs');

const commands = require('./cloudbot_commands.json');

const deduped = commands.cloudbot.settings.custom.reduce((all, {command, response}) => {
  all[response] = all[response] || [];
  all[response].push(command);
  return all;
}, {});

const allCommands = Object.entries(deduped)
  .map(([response, aliases]) => ({ response, aliases }))
  .sort((a, b) => {
    const aliasA = a.aliases.sort()[0];
    const aliasB = b.aliases.sort()[0];
    if (aliasA > aliasB) return 1;
    if (aliasA < aliasB) return -1;
    return 0;
  });

fs.writeFileSync('cloudbot_commands_dedupe.json',
  JSON.stringify(allCommands, null, 2),
  'utf-8')