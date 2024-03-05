import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../07-useReducer/components/todoItem';

describe('Test todoItem component', () => {
  const todo = {
    id: 1,
    description: 'Bola de dragon',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onDoneTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show todo to not complete', () => {
    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onDoneTodo={onDoneTodoMock} />);

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between p-2');

    const spanElemten = screen.getByLabelText('span');
    expect(spanElemten.className).toContain('align-self-center');
  });

  test('should show todo complete', () => {
    todo.done = true;

    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onDoneTodo={onDoneTodoMock} />);

    const spanElemten = screen.getByLabelText('span');
    expect(spanElemten.innerHTML).toBe('<s>Bola de dragon</s>');
  });

  test('should show todo complete when you click the todo ', () => {
    // Assert
    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onDoneTodo={onDoneTodoMock} />);

    // Act
    const spanElemten = screen.getByLabelText('span');
    fireEvent.click(spanElemten);

    // Expect
    expect(onDoneTodoMock).toHaveBeenCalledWith(todo.id);
    expect(spanElemten.innerHTML).toBe('<s>Bola de dragon</s>');
  });

  test('should remove todo complete when you click Borrar button', () => {
    // Assert
    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onDoneTodo={onDoneTodoMock} />);

    // Act
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    // Expect
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
