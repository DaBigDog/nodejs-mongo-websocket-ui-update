var express = require('express');
var app = express();
var http = require('http').Server(app);

//var io = require('socket.io')(http);
var socketServer = require('./commHub.js').listen(http);

var bodyParser = require('body-parser');

var products = require('./routes/products.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ProductsApp', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

/* body and json parser  */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/api/products', products);

/*
io.on('connection', function(socket){
  console.log('User connected!');
//  socket.on('chat message', function(msg){
//    io.emit('chat message', msg);
//  });

});



global.broadcastChange = function(verb, product) {

var msg = { type: verb, object: product };
  console.log(msg);
//  io.emit('productChange', msg);
 
}
*/

http.listen(3000, function(){
  console.log('listening on *:3000');
});
