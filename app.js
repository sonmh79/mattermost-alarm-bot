const initScheduler = require("./scheduler/myScheduler");
const alarmBot = require("./bot/alarmBot");
const express = require('express');
const Mattermost = require('node-mattermost');
const getDateInfo = require("./info/dateInfo");
const getMsgInfo = require("./info/msgInfo");
require('dotenv').config();

const app = express();
app.use('/images', express.static(__dirname + '/public'));

const dateInfo = getDateInfo();
const msgInfo = getMsgInfo(process.env.MATTERMOST_CHANNEL, process.env.SERVER_URL);

const mmAlarmBot = new alarmBot(new Mattermost(process.env.MATTERMOST_URL), msgInfo);

initScheduler(mmAlarmBot, dateInfo);

const port = 3000;
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});