import { useTodo } from '../hooks/useTodo';

import { TodoList, TodoAdd } from './components';

export const TodoApp = () => {
  const { handleToggleDone, handleDeleteTodo, handleNewTodo, todos } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todos.length} <small>Pendientes: 2</small>
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
