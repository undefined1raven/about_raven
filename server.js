const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const { env } = require('process');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
    res.render('main.ejs');
});

app.listen(5600 || process.env.PORT);
console.log('trenulet')