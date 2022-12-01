//import './App.css';

//import react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import custome hooks
import { useAuthContext } from "./hooks/useAuthContext";

//import pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";

//import component
import Navbar from "./Components/Navbar";

function App() {
  const { authIsReady } = useAuthContext();
  return (
    <div className="App">
      {/* we are checking with this condition to fix the flickering of the content */}
      {authIsReady && (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
