export const TodoItem = ({ todo, onDeleteTodo, onDoneTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between p-2">
      <span aria-label="span" className="align-self-center" onClick={() => onDoneTodo(todo.id)}>
        {todo.done ? <s>{todo.description}</s> : todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
