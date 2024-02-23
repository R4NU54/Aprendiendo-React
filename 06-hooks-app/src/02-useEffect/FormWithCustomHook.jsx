import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const { handleChange, username, password, email, onReset } = useForm({
    username: '',
    email: '',
    password: '',
  });

  // const { username, email, password } = form;

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />
      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        className="form-control mt-2"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        className="form-control mt-2"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />

      <button className="btn btn-danger mt-2" onClick={onReset}>
        Reset
      </button>
    </>
  );
};
