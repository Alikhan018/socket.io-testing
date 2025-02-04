const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');
const app = express();
const server = createServer(app);
const io = new Server(server);
const port = 3000;
const host = 'localhost';
//end of initializing objects

//middlewares
app.use(express.static(__dirname + '/public'));


//endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'))
})


//sockets
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })
})



//listening to server
server.listen(port, host, () => {
    console.log(`server -> http://${host}:${port}`)
})