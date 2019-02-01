import React from "react"
import "./Project.css"
const ProjectList = () => {
    return(
        <div className="projectlist">
            <div className="projectCards">
                <span className="projectTitle">Project Title</span>
                <p className="projectOwder">Posted By Rakib</p>
                <p className="date">1st February 2019</p> 
            </div>
            <div className="projectCards">
                <span className="projectTitle">Project Title</span>
                <p className="projectOwder">Posted By Rakib</p>
                <p className="date">1st February 2019</p> 
            </div>
            <div className="projectCards">
                <span className="projectTitle">Project Title</span>
                <p className="projectOwder">Posted By Rakib</p>
                <p className="date">1st February 2019</p> 
            </div>
        </div>
    )
}

export default ProjectList