import { render, screen } from '@testing-library/react';
import { TodoList } from '../../07-useReducer/components';

const todos = [
  {
    id: 1,
    description: 'Bola de dragon',
    done: false,
  },
  {
    id: 2,
    description: 'Bulma',
    done: false,
  },
];

describe('Test <TodoList />', () => {
  test('should render a listItems when you recived todos', () => {
    // Assert
    render(<TodoList todos={todos} />);

    // Act
    const listItem = screen.getAllByRole('listitem');

    // Expect
    expect(listItem.length).toBe(2);
  });
});
