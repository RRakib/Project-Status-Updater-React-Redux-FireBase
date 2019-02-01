import React, { Component } from 'react'
import Notifications from "./Notifications"
import ProjectList from "../Projects/ProjectList"
import "./Dashbord.css"

class Dashbord extends Component {
  render() {
    return (
      <div className="dashbord">
        <div className="container">
            <div>
                <ProjectList />
            </div>
            <div>
                <Notifications />
            </div>
        </div>
      </div>
    )
  }
}

export default Dashbord