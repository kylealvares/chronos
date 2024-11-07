require('dotenv').config();
const fs = require('fs');
const { Client, GatewayIntentBits, Collection } = require('discord.js');

const express = require('express');
const app = express();

// Basic route to check if the app is healthy
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Required Port for Back4App
app.listen(8080, () => {
  console.log('Server running on port 8080');
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates  // Track voice state changes
  ]
});

// Load events from the events folder
client.events = new Collection();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

client.login(process.env.DISCORD_BOT_TOKEN);
