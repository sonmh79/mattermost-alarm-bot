const initScheduler = require("./myScheduler");
const alarmBot = require("./alarmBot");
const express = require('express');
const Mattermost = require('node-mattermost');
require('dotenv').config();

const app = express();
app.use('/images', express.static(__dirname + '/public'));

const dateInfo = {
  second : 1,
  minute : [13,14,15,16],
  hour : 11,
  dayOfWeek : [1,2,3,4,5],
  tz : 'Asia/Seoul',
}

const msgInfo = {
  text: "이번주 점심메뉴입니다.",
  channel: process.env.MATTERMOST_CHANNEL,
  username: '점심메뉴봇',
  attachments: [{
      image_url: process.env.SERVER_URL+'/images/bob.jpg',
  }],
}

const mmAlarmBot = new alarmBot(new Mattermost(process.env.MATTERMOST_URL), msgInfo);

initScheduler(mmAlarmBot, dateInfo);

const port = 3000;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});