require('dotenv').config();

const LOG_CHANNEL_ID = process.env.LOG_CHANNEL_ID;

module.exports = {
  name: 'voiceStateUpdate',
  async execute(oldState, newState, client) {
    const logChannel = client.channels.cache.get(LOG_CHANNEL_ID);
    if (!logChannel) {
      console.error("Log channel not found. Please check LOG_CHANNEL_ID.");
      return;
    }

    const member = newState.member;

    // User joins a voice channel
    if (!oldState.channelId && newState.channelId) {
      logChannel.send(`${member.user.displayName} joined ${newState.channel.name}`);
    }
    
    // User leaves a voice channel
    else if (oldState.channelId && !newState.channelId) {
      logChannel.send(`${member.user.displayName} left ${oldState.channel.name}`);
    }

    // User switches voice channels
    else if (oldState.channelId !== newState.channelId) {
      logChannel.send(`${member.user.tag} moved from ${oldState.channel.name} to ${newState.channel.name}`);
    }
  }
};
