// server.js
const express = require('express');
const app = express();
const PORT = 3000;
process.env.PORT = 3000;
const path = require('path');

const dirPath = path.join(__dirname, './');

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(dirPath + `dist/index.html`);
});

app.get('/error500', (req, res) => {
    res.sendFile(dirPath +`dist/index.html`);
});

app.get('/login', (req, res) => {
    res.sendFile(dirPath +`dist/index.html`);
});

app.get('/register', (req, res) => {
    res.sendFile(dirPath +`dist/index.html`);
});

app.get('/profile', (req, res) => {
    res.sendFile(dirPath +`dist/index.html`);
});

app.get('/data-edit', (req, res) => {
    res.sendFile(dirPath +`dist/index.html`);
});

app.get('/password-change', (req, res) => {
    res.sendFile(dirPath +`dist/index.html`);
});


app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});