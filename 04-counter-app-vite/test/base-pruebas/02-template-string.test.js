import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Test 02-template-string flie', () => {
  test('should getSaludo to return an array like "Hola Raúl', () => {
    const name = 'Raúl';
    const saludo = getSaludo(name);
    expect(saludo).toBe(`Hola ${name}`);
  });
});
