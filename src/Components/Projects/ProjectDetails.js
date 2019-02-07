import React from 'react'
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import "./Project.css"
import { firestore } from 'firebase';



const ProjectDetails = (props) => {

  const {project} = props;
  if(project){
    return (
      <div className="projectDetails">
        <div className="container">
          <span className="projectTitle">{project.title}</span>
          <p className="projectBody">{project.content}        
          </p>
          <div>
              <hr />
              <div className="projectOwder">{project.authorFirstName} {project.authorLastName}</div>
              <p className="date">1st February 2019</p> 
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
    )
  }
}


const mapStateToProps = (store,ownProps) => {
  const id = ownProps.match.params.id
  const projects = store.firestore.data.projects
  const project = projects? projects[id] : null
  return{
    project : project
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: "projects"}
  ])
)(ProjectDetails)