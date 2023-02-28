const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World, this is the root route');
});
app.get('/uno', (req, res) => {
    res.send('Hello World, from route One');
});
app.get('/prueba', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Programación web</title>
    </head>
    <body>
        <h1>Renderizado de HTML</h1>
        <h2>Keven LZC</h2>
    </body>
    </html>`);
});
app.get('/saludo', (req, res) => {
    res.send('Hola :)');
});

app.listen(3000);
