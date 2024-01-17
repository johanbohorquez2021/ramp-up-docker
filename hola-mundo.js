// hola-mundo.js
//console.log('¡Hola Mundo en Javascript!');
 
// alert("You connected to the following path: johanbohorquez2021/cron-ticker_ramp-up_devops:2.0.7")

const http = require('http');
const MongoClient = require('mongodb').MongoClient;

const server = http.createServer(async (req, res) => {
  // Conéctate a la base de datos MongoDB
  const client = await MongoClient.connect('mongodb://mongo-db:27017', { useNewUrlParser: true });
  const db = client.db('mydatabase');

  // Lógica de la aplicación utilizando la base de datos

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('¡Hola Mundo!\n');

  // Cierra la conexión a la base de datos
  client.close();
});

const PORT = 80;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
