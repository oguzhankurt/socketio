const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('Kullanıcı bağlandı')   
    socket.on('chat message', msg => {
        io.emit('chat message', msg)
    })
    socket.on('disconnect', () => {
        console.log('Kullanıcı ayrıldı')
    })
})

http.listen(3000, () => {
  console.log('listening on *:3000');
});