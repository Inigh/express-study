const express = require('express'); // 익스프레스 모듈 불러오기
const app = express(); // 익스프레스 객체 생성
const port = 3000; // 포트 번호

const userRouter = require('./user'); // user.js 모듈 불러오기

app.use('/user', userRouter); // 라우터 객체를 /user 경로에 등록

app.get('/', (req, res) => { // 루트 경로에 대한 GET 요청 리스너
    res.send('Hello World!');
})

// 서버 실행
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})