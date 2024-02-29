import { useForm } from '../../hooks/useForm';
export const TodoAdd = ({ onNewTodoAdd }) => {
  const { formState, handleChange, onResetForm, description } = useForm({
    description: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (description.length <= 1) return;

    const idTodo = crypto.randomUUID();

    const newTodo = {
      id: idTodo,
      description: description,
      done: false,
    };

    onNewTodoAdd(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Agrega todo..."
        autoComplete="off"
        className="form-control"
        value={description}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
        Agregar
      </button>
    </form>
  );
};
