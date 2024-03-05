import { render, screen } from '@testing-library/react';
import { HomePage } from '../../08-useContex/pages/HomePage';
import { UserContext } from '../../08-useContex/context/UserContext';

const userDefault = {
  id: 123,
  name: 'Raúl Núñez',
};

describe('Test in <HomePage/>', () => {
  test('should show the component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />;
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toBe('null');
  });

  test('should show the component with an user', () => {
    render(
      <UserContext.Provider value={{ user: userDefault }}>
        <HomePage />;
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toContain(userDefault.name);
  });
});
