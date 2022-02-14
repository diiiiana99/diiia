import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './components/Home';
import Agents from './components/Agents';

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
