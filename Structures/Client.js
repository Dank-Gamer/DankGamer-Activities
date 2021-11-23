const {
  Client,
  Interaction,
  Collection,
  CommandInteraction,
} = require("discord.js");
const { DiscordTogether } = require("discord-together");
const chalk = require("chalk");
const { options } = require("./Command.options");

module.exports.Activites = class Activities extends Client {
  constructor() {
    super({
      intents: 32767,
    });
    this.activity = new DiscordTogether(this);
    this.command = new Collection();
  }

  async init() {
    this.login(require("../config.json").TOKEN);

    process.on("uncaughtException", (error) =>
      console.log(
        error.stack.replace(`${error.name}:`, `[${chalk.red.bold(error.name)}]`)
      )
    );
    process.on("unhandledRejection", (error) =>
      console.log(
        error.stack.replace(`${error.name}:`, `[${chalk.red.bold(error.name)}]`)
      )
    );

    const activitiesCommand = {
      name: "activity",
      description: "Start an activity in a voice channel!",
      options,
      /**
       *
       * @param {this} client
       * @param {CommandInteraction} interaction
       * @param {Array<string>} args
       */
      run: async (client, interaction, args) => {
        const channel = interaction.options.getChannel("channel");
        const choice = args[1];
        if (!interaction.guild.me.permissions.has("CREATE_INSTANT_INVITE"))
          return interaction.reply({
            content: `I need permissions to generate invite links!`,
          });

        if (choice === "youtube") {
          client.activity
            .createTogetherCode(channel.id, "youtube")
            .then((c) => interaction.reply(`${c.code}`));
        }

        if (choice === "poker") {
          client.activity
            .createTogetherCode(channel.id, "poker")
            .then((c) => interaction.reply(`${c.code}`));
        }

        if (choice === "chess") {
          client.activity
            .createTogetherCode(channel.id, "chess")
            .then((c) => interaction.reply(`${c.code}`));
        }

        if (choice === "checkers") {
          client.activity
            .createTogetherCode(channel.id, "checkers")
            .then((c) => interaction.reply(`${c.code}`));
        }

        if (choice === "betrayal") {
          client.activity
            .createTogetherCode(channel.id, "betrayal")
            .then((c) => interaction.reply(`${c.code}`));
        }

        if (choice === "fishing") {
          client.activity
            .createTogetherCode(channel.id, "fishing")
            .then((c) => interaction.reply(`${c.code}`));
        }

        if (choice === "lettertile") {
          client.activity
            .createTogetherCode(channel.id, "lettertile")
            .then((c) => interaction.reply(`${c.code}`));
        }

        if (choice === "wordsnack") {
          client.activity
            .createTogetherCode(channel.id, "wordsnack")
            .then((c) => interaction.reply(`${c.code}`));
        }

        if (choice === "doodlecrew") {
          client.activity
            .createTogetherCode(channel.id, "doodlecrew")
            .then((c) => interaction.reply(`${c.code}`));
        }

        if (choice === "spellcast") {
          client.activity
            .createTogetherCode(channel.id, "spellcast")
            .then((c) => interaction.reply(`${c.code}`));
        }

        if (choice === "awkword") {
          client.activity
            .createTogetherCode(channel.id, "awkword")
            .then((c) => interaction.reply(`${c.code}`));
        }

        if (choice === "puttparty") {
          client.activity
            .createTogetherCode(channel.id, "puttparty")
            .then((c) => interaction.reply(`${c.code}`));
        }
      },
    };

    this.on("ready", async () => {
      console.log(`Logged in as ${chalk.green.bold(this.user.tag)}`);
      this.command.set(activitiesCommand.name, activitiesCommand);
    
      
      if(require('../config.json').GLOBAL) {
          await this.application.commands.set([activitiesCommand]);
      } else if(!require('../config.json').GLOBAL) {
          await this.guilds.cache.get(require('../config.json').GUILD).commands.set([activitiesCommand])
      }
    });

    this.on("interactionCreate", async (interaction) => {
      if (interaction.isCommand()) {
        const command = this.command.get(interaction.commandName);
        if (!command) return interaction.reply({ content: "Invalid Command" });

        if (command) {
          const args = [];
          for (let options of interaction.options.data) {
            if (options.value) args.push(options.value);
          }

          command.run(this, interaction, args);
        }
      }
    });
  }
};
