import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Test 08-imp-exp file', () => {
  test('should re retornar un heroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('should falsy value if heroe not exist', () => {
    const id = 10;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test('should return an array with DC heroes', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  test('should return an array with Marvel Heroes ', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);
    expect(heroes.length).toBe(2);
    expect(heroes).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ]);
  });
});
