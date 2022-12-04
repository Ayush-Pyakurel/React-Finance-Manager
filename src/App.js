//import './App.css';

//import react router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

//import custome hooks
import { useAuthContext } from './hooks/useAuthContext';

//import pages
import Home from './Pages/Home/Home';
import Login from './Pages/login/Login';
import Signup from './Pages/signup/Signup';

//import component
import Navbar from './Components/Navbar';

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className='App'>
      {/* we are checking with this condition to fix the flickering of the content */}
      {authIsReady && (
        <Router>
          <Navbar />
          <Switch>
            {/* Adding route guard to protect the routes */}
            <Route path='/' exact>
              {!user && <Redirect to='/login' />}
              {user && <Home />}
            </Route>
            <Route path='/signup'>
              {!user && <Signup />}
              {user && <Redirect to='/' />}
            </Route>
            <Route path='/login'>
              {!user && <Login />}
              {user && <Redirect to='/' />}
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
