function scheduler(alarmBot, info) {
    const schedule = require('node-schedule');

    const rule = new schedule.RecurrenceRule();
    rule.dayOfWeek = info.dayOfWeek;
    rule.hour = info.hour;
    rule.minute = info.minute;
    rule.second = info.second;
    rule.tz = info.tz;

    const job = schedule.scheduleJob(rule, function(){
        alarmBot.sendMessage();
    });

}

module.exports = scheduler;