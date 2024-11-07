module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
      console.log(`${client.user.displayName} Bot is logged in and running.`);
    }
  };
  