const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
    res.render('main.ejs');
});

app.listen(5600);
console.log('trenulet')