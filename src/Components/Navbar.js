//import style
import styles from "./Navbar.module.css";

//import custome hook
import { useSignout } from "../hooks/uesLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//import from react-router-dom
import { Link } from "react-router-dom";

const Navbar = () => {
  const { signout } = useSignout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Finance Manager</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>Hi {user.displayName}</li>
            <li>
              <button className="btn" onClick={signout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
