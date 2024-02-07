import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
  test('Debe retornat un arreglo de gifs', async () => {
    const category = 'One Punch';

    const gifs = await getGifs(category);

    expect(gifs.length).toBe(9);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
