

var io;

module.exports.listen = function(http){
    io = require('socket.io')(http);
    
    io.on('connection', function(socket){
        console.log('User connected!');
    });


    return io;
}


   
global.broadcastChange = function(eventName, verb, object) { 
var msg = { type: verb, object: object };
  io.emit(eventName, msg);
 
}


