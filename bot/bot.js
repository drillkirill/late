const TelegramBot = require('node-telegram-bot-api');

const token = '5679586788:AAFoBJWVDKJ-ApU_8MVhnwWC_Ipom9mdeSM';
const url = 'https://vk.com'
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Hello',
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Нажать', web_app: { url: url } }]
                ]
            }
        });
});