import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas UsaCounter', () => {
  test('debe de retornar valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(0);
    expect(typeof increment).toBe('function');
    expect(typeof decrement).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('debe de tener el counter en 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('debe de incrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    act(() => {
      increment();
    });
    expect(result.current.counter).toBe(101);
  });

  test('debe de decrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;

    act(() => {
      decrement();
    });
    expect(result.current.counter).toBe(99);
  });

  test('debe de resetar el contador al estado actual', () => {
    const { result } = renderHook(() => useCounter(0));
    const { counter, reset } = result.current;

    act(() => {
      reset();
    });
    expect(result.current.counter).toBe(0);
  });
});
