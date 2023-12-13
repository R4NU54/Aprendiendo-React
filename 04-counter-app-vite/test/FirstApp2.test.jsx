import { render, screen } from '@testing-library/react';

import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
  const title = 'Hola, soy Goku';
  const subTitle = 'Soy un subtitulo';

  test('should match to Snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the message "Hola soy Goku"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should show the title in a h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  });

  test('should show the subtitle send in props', () => {
    render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    );
    expect(screen.getAllByText(subTitle).length).toBe(1);
  });
});
