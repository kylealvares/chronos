# Chronos

A Discord bot that logs when users join and leave voice channels. This bot uses Node.js and the `discord.js` library to interact with the Discord API.

## Features
- Logs when users join or leave voice channels.
- Provides real-time voice channel activity tracking.
- Can be easily extended for other functionalities within a server.

## Prerequisites
- [Node.js](https://nodejs.org/) (v16.6 or higher)
- [Discord Developer Portal Bot Token](https://discord.com/developers/applications)

## Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:kylealvares/chronos.git
   cd discord-voice-logger-bot
   ```
1. **Install the dependencies:**
    ```bash
    npm install
    ```
1. **Configure the bot:**
Create a .env file and add your bot token along with the ID of the Discord text channel where activity should be logged:
    ```
    DISCORD_BOT_TOKEN=YOUR_TOKEN_HERE
    LOG_CHANNEL_ID=YOUR_CHANNEL_ID
    ```

## Running the Bot

To start the bot, run:
```sh
node index.js
```
You should see a log message confirming that the bot is online.

## File Structure
```sh
chronos/
├── events/
│   ├── ready.js               # Event handler for when the bot is ready
│   └── voiceStateUpdate.js    # Event handler for voice state updates
├── index.js                   # Main entry point for the bot
└── .env                       # Environment file for storing tokens and configuration
```

## Customization

- **Logging Behavior:** Update `voiceStateUpdate.js` to customize the log messages or actions taken when users join / leave voice channels.
- **Additional Features:** You can add more commands and `events` by creating new files in the events folder and loading them in `index.js`.

## Permissions

Make sure the bot has the necessary permissions in your server:

- `View Channels`
- `Connect`
- `Speak`
- `Use Voice Activity`

## Issues & Troubleshooting

- **Bot is not online:** Check the token and verify that only one instance of the bot is running with that token.
- **Permissions issues:** Ensure the bot’s role has the necessary permissions in your server and that Privileged Intents are enabled in the Developer Portal.
