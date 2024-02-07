import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en el componente GifItem', () => {
  const title = 'A title';
  const url = 'https://localhost/algo.jpg';

  const component = (
    <GifItem
      title={title}
      url={url}
    />
  );

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(component);

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el Url y el Alt indicado', () => {
    render(component);

    const { src, alt } = document.querySelector('img');

    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('debe de mostrar el titulo en el componente  ', () => {
    render(component);
    expect(screen.getAllByText(title)).toBeTruthy();
  });
});
