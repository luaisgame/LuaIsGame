require("dotenv").config();

const { Client, GatewayIntentBits, ChannelType } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: ["CHANNEL"],
});

client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    // Ignore bots
    if (message.author.bot) return;

    // Only respond in DMs
    if (message.channel.type !== ChannelType.DM) return;

    if (message.content.toLowerCase() === "-message") {
        await message.reply("hi");
    }
});

client.login(process.env.Cookie);
