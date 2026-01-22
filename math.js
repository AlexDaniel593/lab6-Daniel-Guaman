// Función que calcula el factorial de un número
function factorial(n) {
  if (n < 0) {
    throw new Error('El factorial no está definido para números negativos');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Función que calcula el n-ésimo número de Fibonacci
function fibonacci(n) {
  if (n < 0) {
    throw new Error('El índice de Fibonacci no puede ser negativo');
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exportar las funciones
module.exports = { factorial, fibonacci };
