import React, { Component } from 'react';
import {BrowserRouter , Switch , Route} from "react-router-dom"
import Navbar from "./Components/Layout/Navbar"
import Dashbord from "./Components/Dashbord/Dashbord"
import ProjectDetails from "./Components/Projects/ProjectDetails"
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route path="/" exact component={Dashbord} />
          <Route path="/project/:id" component={ProjectDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
