# instalamos la imagen que necesitamos (si no existe aun)
FROM node:18.13.0

#creamos un directorio dentro de nuestro contenedor donde vamos a copiar nuestros archivos de codigo.
WORKDIR /app

# copiar todo lo que empiece con package a nuestro WORKDIR.
COPY package*.json ./

# instalamos opcionalmente pnpm para gestionar dependencias.
RUN npm install -g pnpm

# instalamos dependecias desde nuestro package.json que copiamos anteriormente a nuestro contenedor.
RUN pnpm install

# copiamos todos nuestros archivos de codigo a nuestro WORKDIR
COPY . ./

# ejecutamos el comando para correr la aplicacion (viene del package.json seccion scripts obviamente!)
CMD ["pnpm", "start"]