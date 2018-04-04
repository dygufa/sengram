import * as TelegramBot from "node-telegram-bot-api";

if (!process.env.TELEGRAM_BOT_TOKEN) {
    throw new Error("TELEGRAM_BOT_TOKEN not defined");
}

if (!process.env.TELEGRAM_CHAT_ID) {
    throw new Error("TELEGRAM_CHAT_ID not defined");
}

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });


export function sendMessage(message: string) {
    bot.sendMessage(process.env.TELEGRAM_CHAT_ID!, message, {
        parse_mode: "Markdown"
    }).then(res => {
        console.log(res);
    }).catch(e => {
        console.error(e);
    });
}
