import { fireEvent, render, screen } from '@testing-library/react';

import { CounterApp } from '../src/CounterApp';

describe('Test <CounterApp/>', () => {
  const inicialValue = 100;

  test('should match to snapshot', () => {
    const { container } = render(<CounterApp value={inicialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('should show default value 100', () => {
    render(<CounterApp value={inicialValue} />);
    expect(screen.getByText(100)).toBeTruthy();
    // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
  });

  test('should increment with button +1', () => {
    render(<CounterApp value={inicialValue} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(101)).toBeTruthy();
  });

  test('should decrement with button -1', () => {
    render(<CounterApp value={inicialValue} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(99)).toBeTruthy();
  });

  test('should reset with button reset', () => {
    render(<CounterApp value={355} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(355)).toBeTruthy();
    screen.debug();
  });
});
