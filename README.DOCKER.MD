# COMANDOS DOCKER
## *Idealmente desplegar aplicacion dockerizada en la seccion 'web services' de render.com (gratuito).
## *Una vez desplegada la app, solo haciendo los commit de git y el push a github, al estar conectado con render, el proceso de deploy es automatico.
### crear imagen de nuestra app, seleccionamos un alias 'mi-chat' (esto lee el archivo Dockerfile que cuenta con la configuracion para hacerlo, ahi tiene las instrucciones.) con -t le asignamos un nombre.  con el punto le decimos que construya a partir del directorio actual.
docker build -t mi-chat .
### ver imagenes creadas
docker images
### ejecutar contenedor con imagen 'mi-chat' dentro de este.
docker run -it -p 8000:3000 mi-chat
### si ya se hizo un run previo, solo ejecutar start, buscar el id con: docker ps -a.
docker start <id_container>
### ejecutar contenedor PERO vinculando los archivos del host(mi maquina) en un volumen, para poder editarlos y ver los cambios al levantar de nuevo el contenedor. $PWD: hace referencia al directorio actual. con -v $PWD/src:/app/src decimos que vincule desdemimaquina:directorioenelcontenedor.
docker run -it -v $PWD/src:/app/src -p 8000:3000 <id_imagen>
### ver todos los procesos ejecutandose / detenidos
docker ps -a
### entrar a la consola de un contenedor corriendo. (USAR ATTR NAMES)
docker exec -it <NAMES> bash 
### detener contenedor
docker stop <id_contenedor>
### eliminar una imagen
docker rmi <id_imagen>
### eliminar un contenedor
docker rm <id_contenedor>