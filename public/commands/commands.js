var commands = [
  {
    "response": "View the details / rules / code here: https://github.com/CodingGarden/frontend-framework-showdown-2020 Type !team team-name in the chat to add a team badge to your chat messages! (vanilla, angular, vue, react and svelte are all valid team names)",
    "aliases": [
      "!project",
      "!workingon"
    ]
  },
  {
    "response": "View the details / rules / code here: https://github.com/CodingGarden/frontend-framework-showdown-2020 Type !team team-name in the chat to add a team badge to your chat messages! (vanilla, angular, vue, react and svelte are all valid team names)",
    "aliases": [
      "!showdown"
    ],
  },
  {
    "response": "https://coding.garden/discord",
    "aliases": [
      "!discord"
    ]
  },
  {
    "response": "https://coding.garden/gear",
    "aliases": [
      "!gear"
    ]
  },
  {
    "response": "https://coding.garden/videos",
    "aliases": [
      "!videos"
    ]
  },
  {
    "response": "This is the keyboard I use: Affiliate link (support me) - https://amzn.to/2nFa2wo Direct link (protect your privacy) - https://www.amazon.com/gp/product/B01M3UQX1Y/ Also checkout https://coding.garden/gear for more info on my setup.",
    "aliases": [
      "!keyboard"
    ]
  },
  {
    "response": "https://www.dejal.com/timeout/",
    "aliases": [
      "!breaktimer",
      "!break-timer",
      "!break"
    ]
  },
  {
    "response": "!faq !discord !gear !videos !keyboard !break !patreon !donate !vscode !editor !youtube !github !twitch !dotfiles !cj !cj-think !cj-pixel !tony-nose-bleed !alca !trello !project !workingon",
    "aliases": [
      "!commands"
    ]
  },
  {
    "response": "https://patreon.com/CodingGardenWithCJ",
    "aliases": [
      "!patreon"
    ]
  },
  {
    "response": "https://streamlabs.com/codinggardenwithcj/tip",
    "aliases": [
      "!donate"
    ]
  },
  {
    "response": "https://github.com/CodingGarden/vscode-settings",
    "aliases": [
      "!vscode"
    ]
  },
  {
    "response": "https://github.com/CodingGardenCommunity/app-wiki/wiki/Frequently-Asked-Questions",
    "aliases": [
      "!faq"
    ]
  },
  {
    "response": "<img src=\"https://i.imgur.com/TFt8RMh.png\" />",
    "aliases": [
      "!cj"
    ]
  },
  {
    "response": "<img src=\"https://i.imgur.com/gtkM6u3.png\" />",
    "aliases": [
      "!cj-think"
    ]
  },
  {
    "response": "<img src=\"https://i.imgur.com/Hl734P3.png\" />",
    "aliases": [
      "!cj-pixel"
    ]
  },
  {
    "response": "<img src=\"https://i.imgur.com/Pyx1Nqx.gif\" />",
    "aliases": [
      "!tony-nose-bleed"
    ]
  },
  {
    "response": "<img src=\"https://i.imgur.com/UC7eiSh.png\" />",
    "aliases": [
      "!phil"
    ]
  },
  {
    "response": "<img src=\"https://i.imgur.com/tcLl4Dz.png\" />",
    "aliases": [
      "!alca"
    ]
  },
  {
    "response": "https://youtube.com/codinggardenwithcj",
    "aliases": [
      "!youtube"
    ]
  },
  {
    "response": "https://twitch.tv/codinggarden",
    "aliases": [
      "!twitch"
    ]
  },
  {
    "response": "https://github.com/CodingGarden",
    "aliases": [
      "!github"
    ]
  },
  {
    "response": "https://github.com/w3cj/dotfiles",
    "aliases": [
      "!dotfiles"
    ]
  },
  {
    "response": "CJ uses VS Code! See his settings here: https://github.com/CodingGarden/vscode-settings",
    "aliases": [
      "!editor"
    ]
  },
  {
    "response": "ITS PRONOUNCED GIF!!!!",
    "aliases": [
      "!gif"
    ]
  },
  {
    "response": "https://vscodethemes.com/e/nur.just-black",
    "aliases": [
      "!theme"
    ]
  },
  {
    "response": "https://trello.com/b/2muD6KVr/stream-tasks",
    "aliases": [
      "!trello"
    ]
  },
  {
    "response": "Onitama is like a mini version of chess with valid moves rotating between players. Buy Onitama on Amazon: https://amzn.to/2V2X0a0 Onitama on BoardGameGeek: https://boardgamegeek.com/boardgame/160477/onitama Publishers website: https://www.arcanewonders.com/game/onitama/",
    "aliases": [
      "!onitama"
    ]
  },
  {
    "response": "If you have an Amazon Prime account, link it to twitch to get 1 free subscription for your favorite streamer! EZ https://twitch.amazon.com/tp",
    "aliases": [
      "!twitchprime",
      "!prime",
      "!tp",
      "!freesub"
    ]
  },
  {
    "response": "!invisible - My twitch partner application was denied. PepeHands  They'd like to observe my channel growth over the next 3-4 weeks and then I can apply again. In the meantime, turn on notifications and tune in when you can to help with my stats!",
    "aliases": [
      "!partner"
    ]
  },
  {
    "response": "Buy the CODE shirt here: https://teespring.com/en/just-code-it and here: https://teespring.com/code-tank-top",
    "aliases": [
      "!code",
      "!tshirt",
      "!shirt"
    ]
  }
];

var renderer = new marked.Renderer();

renderer.link = function( href, title, text ) {
  return '<a target="_blank" rel="noopener" href="'+ href +'" title="' + title + '">' + text + '</a>';
}

document.querySelector('#commands').innerHTML = commands.reduce(function (html, item) {
  return html + ('<tr><td>' + item.aliases.join('\n') + '</td><td class="response">' + marked(item.response, { renderer:renderer }) + '</td></tr>');
}, '');
