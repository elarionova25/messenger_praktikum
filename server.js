// server.js
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const dirPath = path.join(__dirname, './');

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(dirPath + `dist/chats.html`);
});

app.get('/failed', (req, res) => {
    res.sendFile(dirPath +`dist/404.html`);
});

app.get('/login', (req, res) => {
    res.sendFile(dirPath +`dist/login.html`);
});

app.get('/register', (req, res) => {
    res.sendFile(dirPath +`dist/register.html`);
});

app.get('/profile', (req, res) => {
    res.sendFile(dirPath +`dist/profile.html`);
});



app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});