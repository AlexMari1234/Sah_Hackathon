const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Un utilizator s-a conectat');

  socket.on('disconnect', () => {
    console.log('Un utilizator s-a deconectat');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

const port = process.env.PORT || 3000;

http.listen(port, () => {
  console.log(`Ascult pe portul ${port}`);
});
