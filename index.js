const express = require('express');
const sum = require('./sum');
const { factorial, fibonacci } = require('./math');
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

// Endpoint para el factorial
app.get('/factorial/:n', (req, res) => {
  try {
    const n = parseInt(req.params.n);
    const result = factorial(n);
    res.json({ n, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint para fibonacci
app.get('/fibonacci/:n', (req, res) => {
  try {
    const n = parseInt(req.params.n);
    const result = fibonacci(n);
    res.json({ n, result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Levantar el servidor en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
