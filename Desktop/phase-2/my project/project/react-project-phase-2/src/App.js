import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom"
import Home from './components/Home';
import Agents from './components/Agents';
// import Agent from './components/Agent';
// import Crib from './component/Crib'

// matthew@bluecore.com


function App() {
  return (
  <>
  <Router>
    <Navbar />
    <Switch>
    
      {/* <Route path='/'> <Redirect to="/home" /> </Route> */}
      <Route path='/home'><Home /> </Route>
      <Route path='/agents'><Agents /></Route>
    
      </Switch>
     </Router>
    </>
  );
}

export default App;

  // {/* <Route path='/agent' exact><Agent /></Route>
  //     <Route path='/crib' exact><Crib /></Route> */}
