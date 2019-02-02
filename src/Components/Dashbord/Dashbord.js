import React, { Component } from 'react'
import Notifications from "./Notifications"
import ProjectList from "../Projects/ProjectList"
import { connect } from "react-redux"
import "./Dashbord.css"

class Dashbord extends Component {
  render() {
    const {projects} = this.props;
    const projectList = projects.map(items => (
      <ProjectList 
        key={items.id} 
        title={items.title}
        content={items.content}
      />
    ))
    return (
      <div className="dashbord">
        <div className="container">
            <div>
              {projectList}
            </div>
            <div>
                <Notifications />
            </div>
        </div>
      </div>
    )
  }
}

const grabData = (store) => {
  return{
    projects : store.project.project
  }
}



export default connect(grabData)(Dashbord)