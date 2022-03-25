import React from 'react';
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
// import {Route} from 'react-router-dom'
// import SingleCar from "./components/SingleCar"




function App() {
  return (
    <div className="App">
      {/* <Route exact path= "/singlecar">
     <SingleCar/>
     </Route> */}

      <Header />
      <Home />
    </div>
  );
}

export default App;
