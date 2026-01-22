const express = require('express');
const sum = require('./sum');
const app = express();
const PORT = 3000;

// Endpoint sencillo que responde con un mensaje
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor Express LAB6 - Daniel Guaman!');
});

// Endpoint para la suma
app.get('/sum/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const result = sum(a, b);
  res.json({ a, b, result });
});

// Levantar el servidor en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
