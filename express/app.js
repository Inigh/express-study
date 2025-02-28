const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./user');

app.use('/user', userRouter);

app.get('/', (req, res) => { // 루트 경로에 대한 GET 요청 리스너
    res.send('Hello World!');
})

// 서버 실행
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})