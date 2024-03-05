import { render, screen, fireEvent } from '@testing-library/react';

import { LoginPage } from '../../08-useContex/pages/LoginPage';
import { UserContext } from '../../08-useContex/context/UserContext';

const userDefault = {
  id: 123,
  name: 'Raúl Núñez',
};

describe('Test in <LoginPage />', () => {
  test('should show the component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toBe('null');
  });

  test('should show the component change user when click on button setUser', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: userDefault, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenLastCalledWith({ id: 321, name: 'Pepe Grillo' });
  });
});
