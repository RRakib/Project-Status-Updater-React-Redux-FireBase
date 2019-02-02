import React from "react"
import ProjectSummery from "./ProjectSummery"
import "./Project.css"
const ProjectList = (props) => {
    const { title , content} = props;
    return(
        <div className="projectlist">
            <ProjectSummery title={title} content={content} />
        </div>
    )
}

export default ProjectList