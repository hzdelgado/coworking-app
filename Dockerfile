# Usa una imagen oficial de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Genera el build de la aplicación Angular
RUN npm run build --prod

# Instala http-server para servir los archivos estáticos
RUN npm install -g http-server

# Expon el puerto en el que el servidor va a correr
EXPOSE $PORT

# Sirve la aplicación con http-server
CMD ["http-server", "-p", "3000", "dist/coworking-app"]
