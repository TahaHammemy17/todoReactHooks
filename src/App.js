import React from 'react';
import Navbar from './components/layout/navbar';
import Todo from './components/todo';
import Login from './components/login';
import Logout from './components/logout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Switch>
        <Route path="/todos" component={Todo} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/" component={Login} />
      </Switch>
     </Router>
    </div>
  );
}

export default App;
