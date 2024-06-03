import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login');
    navigate('/', {
      replace: true,
    });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-outline-primary  " onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
