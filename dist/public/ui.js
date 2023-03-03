"use strict";

var boton = document.getElementById("boton");
var textarea = document.querySelector(".textarea");
var conversation = document.querySelector(".conversation");

//click boton enviar
boton.addEventListener("click", function () {
  if (textarea.value !== '') {
    enviarAlRoom({
      nombre: socket.nombre,
      texto: textarea.value,
      colorNombre: socket.colorNombre
    });
    textarea.value = '';
    textarea.focus();
  } else {
    alert('😎 escriba un mensaje para continuar...');
  }
});

//envio el mensaje al presionar enter
textarea.addEventListener('keyup', function (e) {
  return e.key === "Enter" ? boton.click() : null;
});