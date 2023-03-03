"use strict";

//CLIENTE

var socket = io();
var colorNombreGen = function colorNombreGen() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  var color = "color: #".concat(randomColor, ";");
  socket.colorNombre = color;
};
colorNombreGen();
var getColorParaNickname = function getColorParaNickname() {
  return socket.colorNombre;
};
var enviarAlRoom = function enviarAlRoom(data) {
  socket.emit('client:msgtoroom', data);
};
socket.on('server:msgtoroom', function (data) {
  var nuevoMensaje = "<br> <b class=\"myName\" style=\"".concat(data.colorNombre, "\">") + '[ ' + data.nombre + ' ]' + '</b>: ' + data.texto;
  conversation.innerHTML += nuevoMensaje;
  conversation.scrollTop = conversation.scrollHeight;
});
socket.on('server:unirse', function () {
  //let res = confirm('Queres unirte al CHAT ???') //true / false
  var res = true;
  var n = prompt('ingresa tu nombre');
  socket.nombre = n;
  socket.emit('client:respuesta:unirse', {
    res: res,
    nombre: n
  });
});