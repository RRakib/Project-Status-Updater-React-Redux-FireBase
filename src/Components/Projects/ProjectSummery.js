import React from 'react'

const ProjectSummery = (props) => {
  const { content , title } = props;
  return (
    <div>
      <div className="projectCards">
                <span className="projectTitle">{title}</span>
                <p className="projectOwder">{content}</p>
                <p className="date">1st February 2019</p> 
            </div>
    </div>
  )
}
export default ProjectSummery;