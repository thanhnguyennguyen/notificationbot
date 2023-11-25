const axios = require('axios').default


const notifyTelegram = async (msg, token, target, isHtmlMode) => {
    if (token.trim() != '' && target.trim() != '') {
        let params = {
            "chat_id": target,
            "text": msg,
        }
        if (isHtmlMode) {
            params.parse_mode = 'html'
            params.disable_web_page_preview = true
        }
        const data = Object.keys(params)
            .map((key, index) => `${key}=${encodeURIComponent(params[key])}`)
            .join('&');

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data,
            url: `https://api.telegram.org/bot${token}/sendMessage`,
        };
        await axios(options)
    }
}

// btnList = [
//     [{
//         text: 'abc',
//         url: 'https://xyz',
//     },
// {
    //         text: 'abc2',
    //         url: 'https://xyz',
    //     }
// ],
// ]
const notifyTelegramWithInlineKeyboard = async (msg, btnList, token, target, isHtmlMode) => {
    if (token.trim() != '' && target.trim() != '') {
        let params = {
            "chat_id": target,
            "text": msg,
            "reply_markup": {
                inline_keyboard: btnList,
            },
        }
        if (isHtmlMode) {
            params.parse_mode = 'html'
            params.disable_web_page_preview = true
        }
        const data = Object.keys(params)
            .map((key, index) => `${key}=${encodeURIComponent(params[key])}`)
            .join('&');

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data,
            url: `https://api.telegram.org/bot${token}/sendMessage`,
        };
        await axios(options)
    }
}

// send markdown format if you want to include hyperlink
const notifySlack = async (msg, token, target, botname, boticon) => {
    if (token.trim() != '' && target.trim() != '') {
        botname = botname || "noti-bot"
        boticon = boticon || "slack"

        let params = {
            payload: JSON.stringify({
                "channel": target,
                "username": botname,
                "blocks": [
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": msg
                        }
                    }
                ],
                "icon_emoji": boticon,

            })
        }
        const data = Object.keys(params)
            .map((key, index) => `${key}=${encodeURIComponent(params[key])}`)
            .join('&');

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data,
            url: `https://hooks.slack.com/services/${token}`,
        };

        await axios(options)
    }
}

const notifyDiscord = async (msg, webhook) => {
    if (webhook.trim() != '') {
        let params = {
            "content": msg,
        }

        const data = Object.keys(params)
            .map((key, index) => `${key}=${encodeURIComponent(params[key])}`)
            .join('&');

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data,
            url: `${webhook}`,
        };

        await axios(options)
    }
}

module.exports = {
    slack: notifySlack,
    telegram: notifyTelegram,
    telegram2: notifyTelegramWithInlineKeyboard,
    discord: notifyDiscord,
}
