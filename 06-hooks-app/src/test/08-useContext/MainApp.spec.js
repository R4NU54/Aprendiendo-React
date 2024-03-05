import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../08-useContex/MainApp';

describe('Test <MainApp/>', () => {
  test('should show the HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    const result = screen.getByText('HomePage');

    expect(result).toBeTruthy();
  });

  test('should show the LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    const result = screen.getByText('LoginPage');
    const anchorTags = screen.getAllByRole('link');

    expect(result).toBeTruthy();
    expect(anchorTags[3].className).toContain('active');
  });

  test('should show the AboutPage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    );

    const result = screen.getByText('AboutPage');
    const anchorTags = screen.getAllByRole('link');

    expect(result).toBeTruthy();
    expect(anchorTags[2].className).toContain('active');
  });
});
