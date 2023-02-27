# COMANDOS DOCKER
### crear imagen con nuestra app 'mi-chat' dentro (lee el archivo Dockerfile con la configuracion para hacerlo)
docker build -t mi-chat .
### ver imagen creada 
docker images
### ejecutar contenedor con imagen 'mi-chat' dentro
docker run -it -p 8000:3000 mi-chat
### ver todos los procesos ejecutandose / detenidos
docker ps -a
### entrar a la consola de un contenedor corriendo. (USAR ATTR NAMES)
docker exec -it <NAMES> bash 
### detener contenedor
docker stop <id>
### eliminar una imagen
docker rmi <id>
### eliminar un contenedor
docker rm <id>