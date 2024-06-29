// server.js (на сервере)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('./auth/Login', (req, res) => {
    const { email, password } = req.body;
    // Проверьте учетные данные пользователя и отправьте ответ
    res.json({ token: 'fake-jwt-token' });
});

app.post('./auth/Sign_Up', (req, res) => {
    const { email, password } = req.body;
    // Зарегистрируйте пользователя и отправьте ответ
    res.json({ success: true });
});

app.listen(5000, () => console.log('Server started on port 5000'));
