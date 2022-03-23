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

if (process.env.NODE_ENV !== 'production') {
    server.listen(5600);
}
else {
    server.listen(process.env.PORT);
}
console.log('Server Online')