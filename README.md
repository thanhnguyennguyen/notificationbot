# noti_bot
send notifications to slack, telegram

# Install
https://www.npmjs.com/package/noti_bot
```bash
npm install noti_bot
```
# Usage
```javascripts
    const noti_bot = require('noti_bot')
    const notifyTelegram = noti_bot.telegram
    const notifySlack = noti_bot.slack
    
    notifyTelegram(msg, TELEGRAM_BOT_TOKEN, TELEGRAM_TARGET_CHAT_ID)
    notifySlack(msg, SLACK_HOOK_KEY, SLACK_CHANNEL, SLACK_BOTNAME, SLACK_BOT_ICON)
```
