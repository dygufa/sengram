import * as TelegramBot from "node-telegram-bot-api";
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

export function sendMessage(message: string) {
    bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
        parse_mode: "Markdown"
    }).then(res => {
        console.log(res);
    }).catch(e => {
        console.error(e);
    });
}
