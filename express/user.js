const express = require('express');
const router = express.Router(); // 라우터 객체 생성

router.get('/', (req, res) => {
    res.json([ // 사용자 형식을 가진 JSON 배열을 응답
        { id: 1, username: 'bryan' },
        { id: 2, username: 'joe' },
        { id: 3, username: 'emma' }
    ])

    const user = users.find(u => u.id === parseInt(req.params.id));

    // 찾은 사용자를 응답
    if (user) {
        res.json(user); // 사용자가 있으면 JSON 형식으로 응답
    } else {
        res.status(404).json({ error: 'User not found' }); // 사용자가 없으면 404 상태 코드와 에러 메시지 응답
    }
});

module.exports = router; // 모듈로 만들어서 내보내기