//style import
import styles from "./Login.module.css";

//import custome hook
import { useLogin } from "../../hooks/useLogin";

//react hook import
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className={styles["login-form"]} onSubmit={handleLoginFormSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      {!loading && (
        <button className="btn" onClick={handleLoginFormSubmit}>
          Login
        </button>
      )}
      {loading && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
