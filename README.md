# noti_bot
send notifications to slack, telegram

# Install
https://www.npmjs.com/package/noti_bot
```bash
npm install noti_bot
```
# Usages
```javascripts
const {
    notifySlack,
    notifyTelegram
} = require('noti_bot')

    notifyTelegram(msg, TELEGRAM_BOT_TOKEN, TELEGRAM_TARGET_CHAT_ID)
    notifySlack(msg, SLACK_HOOK_KEY, SLACK_CHANNEL, SLACK_BOTNAME, SLACK_BOT_ICON)
```
