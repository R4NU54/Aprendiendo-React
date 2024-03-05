import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../07-useReducer/TodoApp';
import { useTodo } from '../../hooks/useTodo';

jest.mock('../../hooks/useTodo');

describe('TodoApp', () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: 'Todo #1', done: false },
      { id: 2, description: 'Todo #2', done: true },
      { id: 3, description: 'Todo #3', done: false },
    ],
    allTodos: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleDone: jest.fn(),
  });

  test('renders TodoApp component', () => {
    // Arrange
    const component = render(<TodoApp />);

    // Act
    const todo1 = screen.getByText('Todo #1');

    // Assert
    expect(component).toMatchSnapshot();
    expect(todo1).toBeTruthy();
  });
});
