import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Test 05-funciones file', () => {
  test('should getUser debe return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test('should getUsuarioActivo return an object', () => {
    // Arrange
    const nombre = 'Raúl';
    // Act
    const userTest = {
      uid: 'ABC567',
      username: nombre,
    };

    const user = getUsuarioActivo(nombre);
    // Assertw
    expect(user).toEqual(userTest);
  });
});
