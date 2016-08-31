const express = require('express');
const app     = express();
const http    = require('http').Server(app);
const io      = require('socket.io').listen(http);

http.listen(process.env.PORT || 8080);

// starts with 9 cameras by default
var amountCameras = 9;
var camera = -1;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/slave.html');
});

// activates a specific camera (i.e. turn backround red)
app.get('/activate/:id', function(req, res){
  camera = req.params.id
	io.sockets.emit('notify', camera)
  res.status(200).send(camera)
});

// sets the amount of cameras to be used
app.get('/amount/:i', function(req, res){
  amountCameras = req.params.i
	io.sockets.emit('amount', amountCameras)
  res.status(200).send(amountCameras)
});

io.on('connection', function (socket) {
  socket.emit('amount', amountCameras);
  socket.emit('activate', camera);
});
