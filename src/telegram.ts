import TelegramBot from "node-telegram-bot-api";

export function sendMessage(message: string) {
    const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });
    bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
}
