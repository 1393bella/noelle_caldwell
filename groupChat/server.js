const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
})

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const io = require('socket.io').listen(server);

let users = {};
let messages = [];
io.sockets.on('connection', function(socket) {
  socket.on('new_user', function(data) {
    //add user to dictionary of users
    users[socket.id] = data.user;
    //show new user all existing messages
    socket.emit('showBoard', {messages: messages});
  });
  socket.on('new_message', function(data) {
    //create message object
    let msg = {message: data.message, user: users[socket.id]};
    //add message to array
    messages.push(msg);
    io.emit('add_message', {message: msg});
  })
})
