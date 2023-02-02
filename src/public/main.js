//CLIENTE

const socket = io()

const colorNombreGen = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    const color = `color: #${randomColor};`
    socket.colorNombre = color
}
colorNombreGen()

const getColorParaNickname = () => {
    return socket.colorNombre
}

const enviarAlRoom = (data) => {
    socket.emit('client:msgtoroom', data)
}

socket.on('server:msgtoroom', data => {
    conversation.innerHTML += `<br><b class="myName" style="${data.colorNombre} background-color:white;">` + '[ ' + data.nombre + ' ]' + '</b>: ' + data.texto
    conversation.scrollTop = conversation.scrollHeight
})


socket.on('server:unirse', () => {
    //let res = confirm('Queres unirte al CHAT ???') //true / false
    let res=true
    let n = prompt('ingresa tu nombre')
    socket.nombre = n
    socket.emit('client:respuesta:unirse', { res: res, nombre: n })
})








