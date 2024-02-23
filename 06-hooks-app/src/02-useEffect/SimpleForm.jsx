import { useState, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [form, setform] = useState({
    username: 'Raul',
    email: 'rr@rr.com',
  });

  const { username, email } = form;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setform({
      ...form,
      [name]: value,
    });
    console.log(name, value);
  };

  useEffect(() => {
    console.log('Hey!');
  }, [email]);

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />

      {username === 'Raul2' && <Message />}

      <input
        type="email"
        name="email"
        className="form-control mt-2"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
    </>
  );
};
