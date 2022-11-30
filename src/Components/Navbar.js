//import style
import styles from "./Navbar.module.css";

//import custome hook
import { useSignout } from "../hooks/uesLogout";

//import from react-router-dom
import { Link } from "react-router-dom";

const Navbar = () => {
  const { signout } = useSignout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Finance Manager</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>

        <li>
          <button className="btn" onClick={signout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
