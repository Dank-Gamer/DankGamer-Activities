<div align="center">
  <h1>Dank Gamer Activities Feature</h1>
  <img src="/public/dankgamer.png" alt="Dank Gamer Logo">
</div>

# Setup

First , change `config.example.json` into `config.json`
After that , setup the configuration for the bot

```js
{
    "TOKEN": "DISCORD BOT TOKEN",
    "GUILD": "GUILD ID TO LOAD SLASH COMMAND",
    /**
       * Set to false if you want to load slash commands to 1 guild
       * Set to true if you want to load slash commands globally
       * -
       * Change the boolean in the config.json you setup
    */
    "GLOBAL": false 
}
```

After setting it up, run the commands below in the terminal

* npm install
* node .