const TelegramBot = require('node-telegram-bot-api');

const API_KEY_BOT = '6808387367:AAGjSltO6BGyKVyK2FAPYp7rVy7rd7dmOsk'

const bot = new TelegramBot(API_KEY_BOT, {
    polling: true

})
const commands = [
    {
        command: 'start',
        description: 'запуск'
    },
    {
        command: 'keyb',
        description: 'клавиатура'
    },
    {
        command: 'help',
        description: 'помощь'
    }
]
bot.setMyCommands(commands)
bot.on('text', async msg => {
    switch (msg.text) {
        case '/start':
            await bot.sendMessage(msg.chat.id, 'пока')
            break;
        case '/help':
            await bot.sendMessage(msg.chat.id, 'кирлилл тучин лем')
            break;
            case '/keyb':
                await bot.sendMessage(msg.chat.id,'клава кока',{
                    reply_markup: {
                        keyboard: [
                            ['жми , жми'],
                            ['жми , жми'],
                            ['close']
                        ], resize_keyboard:true
                    }
                })
                break;
    }
    const fmessge = await bot.sendMessage(msg.chat.id, 'настя, ты лучшая!')
    setTimeout(async () => {
        await bot.editMessageText(msg.text, {
            chat_id: fmessge.chat.id,
            message_id: fmessge.message_id
        })
    }, 3000)
    console.log(msg);
})