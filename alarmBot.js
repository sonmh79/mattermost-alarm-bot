class alarmBot {
    constructor(mattermost, msgInfo) {
        this.info = msgInfo;
        this.mattermost = mattermost;

        console.log("AlarmBot Initialized");
    }

    sendMessage() {
        this.mattermost.send({
            text: this.info.text,
            channel: this.info.channel, 
            username: this.info.username,
            attachments: this.info.attachments,
        })

        console.log("Send Message: "+ new Date());
    }
}

module.exports = alarmBot;