//style import
import styles from './Login.module.css';

//react hook import
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form className={styles['login-form']} onSubmit={handleLoginFormSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          type='text'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className='btn'>Login</button>
    </form>
  );
};

export default Login;
