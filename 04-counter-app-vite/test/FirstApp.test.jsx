import { render } from '@testing-library/react';

import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
  test('should match with the snapshot', () => {
    const title = 'Hola, soy Goku';
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test('should show the title in a h1', () => {
    const title = 'Hola, soy Goku';
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
    expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('should to show a subtitle send by props', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';
    const { getAllByText } = render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    );
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
