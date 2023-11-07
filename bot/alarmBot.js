class alarmBot {
    constructor(mattermost, msgInfo) {
        this.info = msgInfo;
        this.mattermost = mattermost;

        console.log("################# AlarmBot Initialized #################");
    }

    sendMessage() {
        this.mattermost.send({
            text: this.info.text,
            channel: this.info.channel, 
            username: this.info.username,
            attachments: this.info.attachments,
        })

        const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000); // 현재 시간을 utc로 변환한 밀리세컨드값
        const koreaTimeDiff = 9 * 60 * 60 * 1000; // 한국 시간은 UTC보다 9시간 빠름(9시간의 밀리세컨드 표현)
        const koreaTime = new Date(utcNow + koreaTimeDiff); // utc로 변환된 값을 한국 시간으로 변환시키기 위해 9시간(밀리세컨드)를 더함
        console.log("Send Message: "+ koreaTime);
    }
}

module.exports = alarmBot;