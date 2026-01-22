// Importar la función de suma
const sum = require('./sum');

// Crear prueba para la función de suma
test('suma 1 + 2 igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('suma 5 + 7 igual a 12', () => {
  expect(sum(5, 7)).toBe(12);
});

test('suma -1 + 1 igual a 0', () => {
  expect(sum(-1, 1)).toBe(0);
});
