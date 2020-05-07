const fs = require('fs');

const commands = require('./cloudbot_commands.json');

const deduped = commands.reduce((all, {command, response}) => {
  all[response] = all[response] || [];
  all[response].push(command);
  return all;
}, {});

const allCommands = Object.entries(deduped).map(([response, aliases]) => ({ response, aliases }))

fs.writeFileSync('cloudbot_commands_dedupe.json',
  JSON.stringify(allCommands, null, 2),
  'utf-8')