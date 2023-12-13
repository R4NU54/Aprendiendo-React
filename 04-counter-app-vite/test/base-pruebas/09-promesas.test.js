import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas con promesas', () => {
  test('getHeroeByIdAsync should return a Hero', (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });
      done();
    });
  });

  test('getHeroeByIdAsync should return an error, hero dont exist', (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
      done();
    });
  });
});
