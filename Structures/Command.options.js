const options = [
  {
    name: "channel",
    description: "The voice channel where the activity will be played at",
    type: "CHANNEL",
    required: true,
    channelTypes: ["GUILD_VOICE"],
  },
  {
    name: "activity",
    description: "The activity that you want to play",
    required: true,
    type: "STRING",
    choices: [
      {
        name: "Youtube",
        value: "youtube",
      },
      {
        name: "Poker",
        value: "poker",
      },
      {
        name: "Chess",
        value: "chess",
      },
      {
        name: "Checkers in the Park",
        value: "checkers",
      },
      {
        name: "Betrayal",
        value: "betrayal",
      },
      {
        name: "Fishington",
        value: "fishing",
      },
      {
        name: "Letter Tile",
        value: "lettertile",
      },
      {
        name: "Words Snack",
        value: "wordsnack",
      },
      {
        name: "Doodle Crew",
        value: "doodlecrew",
      },
      {
        name: "SpellCast",
        value: "spellcast",
      },
      {
        name: "Awkword",
        value: "awkword",
      },
      {
        name: "Puttparty",
        value: "puttparty",
      },
    ],
  },
];

module.exports = { options };
