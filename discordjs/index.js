const TOKEN = process.env.TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const CHANNEL_ID = process.env.CHANNEL_ID;

const fs = require('fs');
const { Client, GatewayIntentBits } = require("discord.js");
const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource,
    AudioPlayerStatus,
} = require("@discordjs/voice");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates],
});
const player = createAudioPlayer();
const files = fs.readdirSync("./voices");
const randomFileName = files[Math.floor(Math.random() * files.length)];
const resource = createAudioResource("./voices/".concat(randomFileName));

client.on("ready", () => {
    const guild = client.guilds.cache.get(GUILD_ID);
    const channel = guild.channels.cache.get(CHANNEL_ID);

    const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    });

    player.play(resource);
    connection.subscribe(player);
});

player.on(AudioPlayerStatus.Idle, () => {
    client.destroy();
});

client.login(TOKEN);
