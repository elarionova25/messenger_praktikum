// server.js
const express = require('express');
const app = express();
const PORT = 3000;
process.env.PORT = 3000;
const path = require('path');

const dirPath = path.join(__dirname, './');

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(dirPath + `dist/pages/index.html`);
});

app.get('/failed', (req, res) => {
    res.sendFile(dirPath +`dist/pages/404/index.html`);
});

app.get('/login', (req, res) => {
    res.sendFile(dirPath +`dist/pages/login/index.html`);
});

app.get('/register', (req, res) => {
    res.sendFile(dirPath +`dist/pages/register/index.html`);
});

app.get('/profile', (req, res) => {
    res.sendFile(dirPath +`dist/pages/profile/index.html`);
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});