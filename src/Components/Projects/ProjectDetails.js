import React from 'react'
import "./Project.css"
const ProjectDetails = (props) => {
    console.log(props)
  return (
    <div className="projectDetails">
      <div className="container">
        <span className="projectTitle">Project {props.match.params.id}</span>
        <p className="projectBody">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.            
        </p>
        <div>
            <hr />
            <div className="projectOwder">Posted By Rakib Uddin</div>
            <p className="date">1st February 2019</p> 
        </div>
      </div>
    </div>
  )
}
export default ProjectDetails