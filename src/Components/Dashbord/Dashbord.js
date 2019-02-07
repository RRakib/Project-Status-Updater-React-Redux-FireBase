import React, { Component } from 'react'
import Notifications from "./Notifications"
import ProjectList from "../Projects/ProjectList"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import "./Dashbord.css"

class Dashbord extends Component {
  render() {
    const {projects} = this.props;
    if(projects){
      const projectList = projects.map(items => (
        <ProjectList 
          key = {items.id}
          project = {items}
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
    else{
      return(
      <div>
        <h2>Loading...</h2>
      </div>
      )}
  }
}

const grabData = (store) => {
    return{
    projects : store.firestore.ordered.projects
  }


}


export default compose(
  connect(grabData),
  firestoreConnect([
    { collection : "projects"}
  ])
  )(Dashbord)