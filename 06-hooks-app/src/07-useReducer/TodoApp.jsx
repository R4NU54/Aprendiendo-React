import { useTodo } from '../hooks/useTodo';

import { TodoList, TodoAdd } from './components';

export const TodoApp = () => {
  const { handleToggleDone, handleDeleteTodo, handleNewTodo, todos, allTodos, pendingTodosCount } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {allTodos} <small>Pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onDoneTodo={handleToggleDone} />
        </div>
        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <TodoAdd onNewTodoAdd={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
