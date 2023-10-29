import React from 'react';
import "./myProjectsRight.css"

export default function MyProjects(props) {
    const {src, type, name, description, tech, github, link} = props;


//Projects that are right aligned
  return (
    <div className="container projectContent">
        <div className="row justify-content-center">
            <div className="col-11 col-lg-10 p-0 mt-5 mb-5 w-100">
                <div className="imageWrapper col-lg-10">
                    <img src={src} alt="Placeholder Image" className="project-image w-100" />
                </div>
            </div>
            <div className="col-11 col-lg-6 projectDescription p-0 w-75">
                <span>{type}</span>
                <h4>{name}</h4>
                <p className='fs-6'>{description}</p>
                    <li className='projectTechList p-0 pb-4 w-100'>{tech}</li>
                <div className="projectLinks">
                    <a href={github} target='_blank'><i className="bi bi-github"></i></a>
                    <a href={link} target='_blank'><i className="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    </div>
    
    
  )
}
