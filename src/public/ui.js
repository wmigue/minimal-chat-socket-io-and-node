let boton = document.getElementById("boton")
const textarea = document.querySelector(".textarea")
const conversation = document.querySelector(".conversation")

//click boton enviar
boton.addEventListener("click", () => {
    if (textarea.value !== '') {
        enviarAlRoom({ nombre: socket.nombre, texto: textarea.value, colorNombre: socket.colorNombre })
        textarea.value = ''
        textarea.focus()
    } else {
        alert('😎 escriba un mensaje para continuar...')
    }
})

//envio el mensaje al presionar enter
textarea.addEventListener('keyup', e => e.key === "Enter" ? boton.click() : null)
