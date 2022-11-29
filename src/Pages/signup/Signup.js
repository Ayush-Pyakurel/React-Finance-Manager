//style import
import styles from './Signup.module.css';

//import react hooks
import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  //signup form submit
  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles['signup-form']} onSubmit={handleSignupFormSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Email: </span>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>Password: </span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      <label>
        <span>Username: </span>
        <input
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
      </label>
      <button className='btn'>Sign Up</button>
    </form>
  );
};

export default Signup;
