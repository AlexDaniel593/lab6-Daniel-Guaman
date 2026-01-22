// Importar las funciones de math.js
const { factorial, fibonacci } = require('./math');

// Pruebas para la función factorial
describe('Factorial', () => {
  test('factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial de 1 debe ser 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('factorial de 10 debe ser 3628800', () => {
    expect(factorial(10)).toBe(3628800);
  });

  test('factorial de número negativo debe lanzar error', () => {
    expect(() => factorial(-1)).toThrow('El factorial no está definido para números negativos');
  });
});

// Pruebas para la función fibonacci
describe('Fibonacci', () => {
  test('fibonacci de 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci de 1 debe ser 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci de 5 debe ser 5', () => {
    expect(fibonacci(5)).toBe(5);
  });

  test('fibonacci de 10 debe ser 55', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('fibonacci de número negativo debe lanzar error', () => {
    expect(() => fibonacci(-1)).toThrow('El índice de Fibonacci no puede ser negativo');
  });
});
