import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas con async-await y fetch', () => {
  test('getImagen should return an url from image ', async () => {
    const url = await getImagen();
    // expect(typeof url).toBe('string');
    expect(url.includes('https://')).toBe(true);
  });
});
