const {
    exec
} = require('child_process')
const notifyTelegram = (msg, token, target, isHtmlMode) => {
    if (token.trim() != '' && target.trim() != '') {
        let cmd
        if (isHtmlMode) {
            cmd = "curl -X POST -H 'Content-Type: application/json' -d '{\"chat_id\": \"" + target + "\", \"text\": \"" + msg + "\", \"parse_mode\": \"html\", \"disable_web_page_preview\": true}' https://api.telegram.org/bot" + token + "/sendMessage"
        } else {
            cmd = "curl -X POST -H 'Content-Type: application/json' -d '{\"chat_id\": \"" + target + "\", \"text\": \"" + msg + "\"}' https://api.telegram.org/bot" + token + "/sendMessage"
        }
        exec(cmd)
    }
}
const notifySlack = (msg, token, target, botname, boticon) => {
    if (token.trim() != '' && target.trim() != '') {
        botname = botname || "noti-bot"
        boticon = boticon || "slack"
        let cmd = "curl -X POST --data-urlencode \"payload={\\\"channel\\\": \\\"" + target + "\\\", \\\"username\\\": \\\"" + botname + "\\\", \\\"text\\\": \\\"" + msg + "\\\", \\\"icon_emoji\\\": \\\":" + boticon + ":\\\"}\" https://hooks.slack.com/services/" + token
        exec(cmd)
    }
}

const notifyDiscord = (msg, webhook, target) => {
    if (webhook.trim() != '' && target.trim() != '') {
        let cmd = "curl -X POST --data '{\"content\":\"" + msg + "\"}' --header \"Content-Type:application/json\" " + webhook
        exec(cmd)
    }
}

module.exports = {
    slack: notifySlack,
    telegram: notifyTelegram,
    discord: notifyDiscord,
}