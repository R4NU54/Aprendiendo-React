import { render, screen, fireEvent } from '@testing-library/react';

import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en el componente AddCategory', () => {
  test('Debe ser como el snapshot', () => {
    const { container } = render(<AddCategory onNewCategory={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  test('Debe cambiar el valor del input', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Hola mundo' } });
    expect(input.value).toBe('Hola mundo');
  });

  test('debe llamar onNewCategory si el input tienen un valor', () => {
    const inputValue = 'Hola mundo!';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('no debe ser llamar al onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
