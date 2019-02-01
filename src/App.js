import React, { Component } from 'react';
import {BrowserRouter , Switch , Route} from "react-router-dom"
import Navbar from "./Components/Layout/Navbar"
import Dashbord from "./Components/Dashbord/Dashbord"
import ProjectDetails from "./Components/Projects/ProjectDetails"
import SignIn from "./Components/Auth/SignIn"
import SignUp from "./Components/Auth/SignUp"
import CreateProject from "./Components/Projects/CreateProject"
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
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createproject" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
