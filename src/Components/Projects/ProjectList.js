import React from "react"
import ProjectSummery from "./ProjectSummery"
import "./Project.css"
const ProjectList = () => {
    return(
        <div className="projectlist">
            <ProjectSummery />
            <ProjectSummery />
            <ProjectSummery />
        </div>
    )
}

export default ProjectList