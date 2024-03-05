import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <p>{user ? user.name : ''}</p>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 321,
            name: 'Pepe Grillo',
          })
        }>
        Set user
      </button>
    </>
  );
};
