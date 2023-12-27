# /app /usr /lib
FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# Dest /app
COPY package.json ./

# Instalar dependencias
RUN npm install

# Dest /app
COPY . .

# Realizar testing
RUN npm run test 

# Eliminar archivos y directorias no necesarios en PROD
RUN rm -rf test && rm -rf node_modules

# Instalar unicamente dependencias de PROD
RUN npm install --prod 

# Comando run de la imagen
CMD [ "node", "app.js" ]



 