import { useReducer, useEffect } from 'react';
import { todoReducer } from '../07-useReducer/TodoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = todo => {
    dispatch({
      type: 'Add',
      payload: todo,
    });
  };

  const handleDeleteTodo = todoId => {
    dispatch({
      type: 'Delete',
      payload: todoId,
    });
  };

  const handleToggleDone = todoId => {
    dispatch({
      type: 'Done',
      payload: todoId,
    });
  };

  const pendingTodosCount = todos.filter(todo => !todo.done).length;

  const allTodos = todos.length;

  return {
    todos,
    allTodos,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleDone,
  };
};
