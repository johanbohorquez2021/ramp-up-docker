# Usa una imagen base de Node.js
FROM node:14 as build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Segunda etapa para la imagen final
FROM node:14-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de la primera etapa (solo los necesarios para ejecutar la aplicación)
COPY --from=build /app/build ./build

# Expone el puerto en el que el servidor estará escuchando
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
