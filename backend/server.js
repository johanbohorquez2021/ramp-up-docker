const express = require('express');
const app = express();
const port = 3001;

app.get('/api/data', (req, res) => {
  const data = { message: '¡Datos del backend!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
