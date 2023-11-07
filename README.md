### 점심 메뉴 알리미

오늘의 점심 메뉴가 궁금하지 않으신가요 ??

매일 오전 점심 식단표를 알려드립니다 !

![예시](/etc/example.PNG)

### 버전 정보
- node v20.9.0
- npm 10.1.0

### 설정 방법

#### 1. 라이브러리 설치

```
npm i
```

#### 2. 식단표 사진 준비
매일 알람과 함께 보낼 사진을 준비한다.


- 이번주 식단표 사진: `/public/bob.jpg`

#### 3. 환경 변수 설정
MM 웹훅 정보 및 서버 주소를 환경 변수로 입력한다.
- `.env` 파일 생성
    ```
    vi .env
    ```
- MM 웹훅 및 서버 정보
    ```
    MATTERMOST_URL={MM 웹훅 URL} // 통합 > 전체 Incoming Webhook 확인
    MATTERMOST_CHANNEL={채널 이름}
    SERVER_URL={서버 도메인 주소} // 예시) https://{my-server.com}

    ```

### 4. 알림 시간 및 메시지 커스텀
- 알림 시간 설정 (`info/dateInfo.js`)
    ```
    // 평일 + 매일 오전 9시
    const dateInfo = {
        tz : 'Asia/Seoul',
        dayOfWeek : [1,2,3,4,5], // 0,7: 일요일
        hour : 9,
        minute : 0,
        second : 0,
    }
    ```

- 메시지 설정 (`info/msgInfo.js`)
    ```
    // 예시
    const msgInfo = {
        text: "이번주 점심메뉴입니다.", // 텍스트 설정
        channel: ch,
        username: '점심메뉴봇', // 이름 설정
        attachments: [{
            image_url: domain+'/images/bob.jpg',
        }],
    }
    ```

### 5. 서버 실행
```
node app.js
```