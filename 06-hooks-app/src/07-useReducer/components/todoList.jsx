import { TodoItem } from './todoItem';

export const TodoList = ({ todos = [], onDeleteTodo, onDoneTodo }) => {
  return (
    <ul className="d-flex gap-2 list-group">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onDoneTodo={onDoneTodo} />
      ))}
    </ul>
  );
};
