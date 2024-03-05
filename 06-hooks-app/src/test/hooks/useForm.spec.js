import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../hooks';

describe('Pruebas useForm', () => {
  const initalForm = {
    name: 'raul',
    email: 'rr@rr.com',
  };

  test('debe de regresar un formulario por defecto', () => {
    // Assert

    // Act
    const { result } = renderHook(() => useForm(initalForm));

    // Expect
    expect(result.current).toEqual({
      name: initalForm.name,
      email: initalForm.email,
      onResetForm: expect.any(Function),
      formState: initalForm,
      handleChange: expect.any(Function),
    });
  });

  test('debe cambiar el nombre del formulario', () => {
    // Assert
    const newValue = 'Juan';
    const { result } = renderHook(() => useForm(initalForm));
    const { handleChange } = result.current;

    // Act
    act(() => {
      handleChange({ target: { name: 'name', value: newValue } });
    });

    // Expect
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test('debe resetear el formulario al estado inicial', () => {
    // Assert
    const newValue = 'Juan';
    const { result } = renderHook(() => useForm(initalForm));
    const { onResetForm, handleChange } = result.current;

    // Act
    act(() => {
      handleChange({ target: { name: 'name', value: newValue } });
      onResetForm();
    });

    // Expect
    expect(result.current.name).toBe(initalForm.name);
    expect(result.current.formState.name).toBe(initalForm.name);
    console.log(result);
  });
});
