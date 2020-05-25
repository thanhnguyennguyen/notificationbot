# noti_bot
send notifications to slack, telegram

# Install
https://www.npmjs.com/package/noti_bot
```bash
npm install noti_bot
```
# Setup telegram/slack bot
- Slack: Incomming webhook url (https://slack.com/intl/en-vn/help/articles/115005265063-Incoming-Webhooks-for-Slack)
-Telegram: 
    - Go to `@BotFather`
    - `/start` to create your bot
    - Save your bot's token
    - Go to following url: https://api.telegram.org/botXXX:YYYY/getUpdates, replace XXX:YYYY with your bot token
        - Looking for `"chat":{"id":zzzzzzzzzz,`
        - If you would like to get direct message from bot, get your possitive chat id
        - If you would like to post message to a group, invite bot to that group, then looking for chat id of group (it's the nagative chat id)
        ![image](https://user-images.githubusercontent.com/17243442/82772751-5b144b00-9e6a-11ea-8740-daaf73664cd3.png)

# Usage
```javascripts
    const noti_bot = require('noti_bot')
    const notifyTelegram = noti_bot.telegram
    const notifySlack = noti_bot.slack
    
    notifyTelegram(msg, TELEGRAM_BOT_TOKEN, TELEGRAM_TARGET_CHAT_ID)
    notifySlack(msg, SLACK_HOOK_KEY, SLACK_CHANNEL, SLACK_BOTNAME, SLACK_BOT_ICON)
```
