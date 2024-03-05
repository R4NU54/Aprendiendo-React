import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const AboutPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>AboutPage</h1>
      <p>{user ? user.name : ''}</p>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
