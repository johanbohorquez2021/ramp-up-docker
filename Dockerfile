# Imagen de NGINX como servidor web
FROM nginx:alpine

# Eliminar la configuracion de NGINX
RUN rm -rf /usr/share/nginx/html/*

# Copiar archivos de HTML y Javascript al directorio de NGINX
COPY index.html /usr/share/nginx/html
COPY hola-mundo.js /usr/share/nginx/html

# Expone el puerto 80 para acceder al servidor web
EXPOSE 80

# Comando run de la imagen
# CMD [ "node", "hola-mundo.js" ]



 