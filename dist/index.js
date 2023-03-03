"use strict";

var _express = _interopRequireDefault(require("express"));
var _socket = require("socket.io");
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//SERVIDOR

var app = (0, _express["default"])();
var server = _http["default"].createServer(app);
var io = new _socket.Server(server); //queda pendiente del servidor
app.use(_express["default"]["static"](__dirname + '/public')); //servir todo lo del directorio public.

//de cada cliente que se conecta, obtenemos un objeto, sacamos el atributo id, que es unico de cada conexion.
io.on('connection', function (socket) {
  console.log('nueva conexion desde cliente ID: ' + socket.id); //consola del servidor

  //////////// ROOMS /////////////

  socket.emit('server:unirse');
  socket.on('client:respuesta:unirse', function (data) {
    // console.log(data)
    if (data.res === true) {
      console.log(data.nombre);
      socket.join('room1'); //socket.id se une a la sala room1 (podemos asignar otro nombre)
    }
  });

  socket.on('client:msgtoroom', function (data) {
    if (socket.rooms.has('room1')) {
      //si estoy dentro de esa sala, puedo enviar mensajes a esa sala.
      io.to('room1').emit('server:msgtoroom', data); //envio mensaje a todos los de la sala "room"
    }
  });
});

server.listen(3000);
console.log("server on port", 3000);