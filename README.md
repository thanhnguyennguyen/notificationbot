# noti_bot
send notifications to slack, telegram

# Install
https://www.npmjs.com/package/noti_bot
```bash
npm install noti_bot
```
# Setup
- Slack: 
  - Go to [`Incoming webhook` setting](slack.com/apps/A0F7XDUAZ-incoming-webhooks?tab=settings&next_id=0)
  - Add to Slack
  - At `Post to Channel` section, select channel or username want to receive message
  - `Add Incoming webhook integration`
  - Copy webhook URL
  - Your SLACK_HOOK_KEY is all text following `https://hooks.slack.com/services/`
  example: `T04BK8XKDPH/B04SA4ZCT45/EuvIUglFNNkEJIPlKRyGNH5K`

- Telegram: 
    - Go to `@BotFather`
    - `/start` to create your bot
    - Save your bot's token
    - If you would like to get direct message from bot, send message to bot first to activate (otherwise, telegram will make your message is spam and won't deliver to your user)
    - If you would like to post message to a group, invite bot to that group
    - Run a bot instance to answer to user their TELEGRAM_CHAT_ID

    using
    /mytelegramid

    ```javascript
    const Promise = require('bluebird')
        Promise.config({
        cancellation: true,
    })
    const TelegramBot = require('node-telegram-bot-api')
    // replace the value below with the Telegram token you receive from @BotFather
    const token = process.env.TOKEN
    // Create a bot that uses 'polling' to fetch new updates
    const bot = new TelegramBot(token, {
    polling: true,
    })


    bot.onText(/\/mytelegramid/, async (msg, match) => {
        let res = `Your telegram id is ${msg.from.id}`
        bot.sendMessage(msg.chat.id, res, {
            reply_to_message_id: msg.message_id,
        })
    })
    ```

# Usage
```javascript
    const noti_bot = require('noti_bot')
    const notifyTelegram = noti_bot.telegram
    const notifySlack = noti_bot.slack
    const notifyDiscord = noti_bot.discord
    
    // enable isHtmlMode = true if you send rich text
    notifyTelegram(msg, TELEGRAM_BOT_TOKEN, TELEGRAM_TARGET_CHAT_ID , isHtmlMode)

    // convert msg to markdown format if you want to send rich text
    notifySlack(msg, SLACK_HOOK_KEY, SLACK_CHANNEL, SLACK_BOTNAME, SLACK_BOT_ICON)

    // convert msg to markdown format if you want to send rich text
    notifyDiscord(msg, webhook)
```
