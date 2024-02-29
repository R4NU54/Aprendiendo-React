import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <p>{user.name}</p>
      <pre>{JSON.stringify(user, null, 3)}</pre>
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
