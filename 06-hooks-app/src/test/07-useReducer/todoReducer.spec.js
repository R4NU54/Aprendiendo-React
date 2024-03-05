import { todoReducer } from '../../07-useReducer/TodoReducer';

describe('Pruebas en el todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Demo Todo',
      done: false,
    },
  ];

  test('should to return an initialState', () => {
    // Act
    const expectedState = todoReducer(initialState, {});

    //Expect
    expect(expectedState).toBe(initialState);
  });

  test('should to add a new Todo', () => {
    const action = {
      type: 'Add',
      payload: {
        id: 2,
        description: 'New Todo',
        done: false,
      },
    };

    // Act
    const expectedState = todoReducer(initialState, action);

    //Expect
    expect(expectedState.length).toBe(2);
    expect(expectedState).toContain(action.payload);
  });

  test('should to delete a Todo', () => {
    //Assert
    const action = {
      type: 'Delete',
      payload: 1,
    };

    // Act
    const expectedState = todoReducer(initialState, action);

    //Expect
    expect(expectedState.length).toBe(0);
  });

  test('should to complete a Todo', () => {
    //Assert
    const action = {
      type: 'Done',
      payload: 1,
    };

    // Act
    const expectedState = todoReducer(initialState, action);

    //Expect
    expect(expectedState[0].done).toBe(true);
  });
});
