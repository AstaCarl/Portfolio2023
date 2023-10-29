import React from 'react'
import Placeholder2 from "./placeholder2.jpg"
import "./myProjectsLeft.css"

//Projects that are left aligned
export default function MyProjectsLeft(props) {
    const {src, type, name, description, tech, github, link} = props;
  return (
    <div className="container projectContent">
        <div className="row justify-content-center">
            <div className="col-11 col-lg-10 p-0 mt-5 mb-5 w-100">
                <div className="imageWrapper right">
                    <img src={src} alt="Placeholder Image" className="project-image" />
                </div>
            </div>
            <div className="col-11 col-lg-6 secondProjectDescription p-0 order-lg-3 w-75">
                <span>{type}</span>
                <h4>{name}</h4>
                <p className='fs-6'>
                    {description} </p>
                    <li className='secondProjectTechList p-0 pb-3 w-100'>{tech}</li>
                <div className="secondProjectLinks">
                    <a href={github} target='_blank'><i className="bi bi-github"></i></a>
                    <a href={link} target='_blank'><i className="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
</div>

  )
}
