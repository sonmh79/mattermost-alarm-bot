function getMsgInfo(ch, domain) {
    const msgInfo = {
        text: "이번주 점심메뉴입니다.",
        channel: ch,
        username: '점심메뉴봇',
        attachments: [{
            image_url: domain+'/images/bob.jpg',
        }],
      }

    return msgInfo;
}

module.exports = getMsgInfo;