//import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import pages
import Home from './Pages/Home/Home';
import Login from './Pages/login/Login';
import Signup from './Pages/signup/Signup';

//import component
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
