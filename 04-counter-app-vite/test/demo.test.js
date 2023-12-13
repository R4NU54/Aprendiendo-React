// import { test, expect } from 'jest';
describe('Pruebas de Compoenente', () => {
  test('Esta prueba ni debe fallar', () => {
    const message1 = 'Hola Mundo';

    const message2 = message1.trim();

    expect(message1).toBe(message2);
  });
});
