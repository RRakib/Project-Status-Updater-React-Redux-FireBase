import React from "react"
import ProjectSummery from "./ProjectSummery"
import "./Project.css"
import { Link } from "react-router-dom"

const ProjectList = (props) => {
    const { title , content , id} = props.project;
    return(
        <div className="projectlist">
            <Link to={/project/ + id}><ProjectSummery title={title} content={content} /></Link>
        </div>
    )
}

export default ProjectList