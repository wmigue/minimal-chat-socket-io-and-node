//SERVIDOR

import express from 'express'
import { Server as Sockete } from 'socket.io'
import http from 'http'
const app = express()
const server = http.createServer(app)
const io = new Sockete(server) //queda pendiente del servidor
app.use(express.static(__dirname + '/public')) //servir todo lo del directorio public.



//de cada cliente que se conecta, obtenemos un objeto, sacamos el atributo id, que es unico de cada conexion.
io.on('connection', (socket) => {
    console.log('nueva conexion desde cliente ID: ' + socket.id) //consola del servidor

    //////////// ROOMS /////////////

    socket.emit('server:unirse')

    socket.on('client:respuesta:unirse', (data) => {
        // console.log(data)
        if (data.res === true) {
            console.log(data.nombre)
            socket.join('room1') //socket.id se une a la sala room1 (podemos asignar otro nombre)
        }
    })

    socket.on('client:msgtoroom', data => {
        if (socket.rooms.has('room1')) { //si estoy dentro de esa sala, puedo enviar mensajes a esa sala.
            io.to('room1').emit('server:msgtoroom', data) //envio mensaje a todos los de la sala "room"
        }
    })

})

server.listen(3000)
console.log("server on port", 3000)