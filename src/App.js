import './App.css';
import BigHeading from './components/BigHeading';
import StickyLink from './components/StickyLink';
import AboutMe from './components/AboutMe';
import MyProjectsRight from './components/MyProjectsRight';
import MyProjectsLeft from './components/MyProjectsLeft';
import Contact from './components/Contact';
import { Project } from "./entities/project"
import { useState } from 'react';
import React from 'react';
import Placeholder2 from "./components/placeholder2.jpg";
import SecondHeading from './components/SecondHeading';
import Pipper from "./components/pipper.png"
import Toolbar from './components/Toolbar/ToolBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  const projectData = [
    new Project ( 
        Placeholder2, 
        'School project', 
        'Pipper', 
        'A Twitter clone, called Pipper, able to display user created content. Creation of databases in MySQL, a backend server using PHP and frontend client in HTML/CSS/JS', 
        'VSCode MySQL PHP HTML/CSS/JS',
        'https://github.com/AstaCarl/OLA_pipper',
        'https://github.com/AstaCarl/OLA_pipper'
        ), 
  ];

    const secondProject = new Project(
      Placeholder2,
      'School project',
      'React',
      '3 small projects developed in React. Rewriting the Pipper project in react, a contactbook with the option to add contacts, a clothing store with the option to add clothing to a shoppingcart.',
      'VSCode React Bootstrap HTML/CSS/JS ',
      'https://github.com/AstaCarl/OLA_pipper',
      'https://github.com/AstaCarl/OLA_pipper'
    );

    const thirdProject = new Project(
      Placeholder2,
      'School project',
      '2. semester exam',
      'A digital platform that introduces 2 creative subjects with educational content. The platform is built from scratch with HTML, CSS and JavaScript and implemented Bootstrap framework.',
      'VSCode HTML/CSS/JS Bootstrap',
      'https://github.com/AstaCarl/OLA_pipper',
      'https://github.com/AstaCarl/OLA_pipper'
    );

    const fourthProject = new Project(
      Placeholder2,
      'School project',
      '1. semester exam',
      'A website that acts as a personal portfolio which represents the different courses from the 1. semester. The portfolio is built from scratch in VSCode with HTML and CSS',
      'VSCode HTML/CSS',
      'https://github.com/AstaCarl/OLA_pipper',
      'https://github.com/AstaCarl/OLA_pipper'
    );

 const [projects, setProjects] = useState(projectData)

 const [sideDrawerOpen, setSideDrawerOpen] = useState(false)


  return (
    <div className="App">
      <Toolbar
      sideDrawerOpen={sideDrawerOpen}
      setSideDrawerOpen={setSideDrawerOpen} />
      <BigHeading/>
      <AboutMe/>
      <SecondHeading/>
        {projects.map((projectObj, index) => (
          <MyProjectsRight
            key={index}
            src={projectObj.src}
            type={projectObj.type}
            name={projectObj.name} 
            description={projectObj.description} 
            tech={projectObj.tech} 
            github={projectObj.github} 
            link={projectObj.link} />
            ))};
          <MyProjectsLeft
            src={secondProject.src}
            type={secondProject.type}
            name={secondProject.name}
            description={secondProject.description}
            tech={secondProject.tech}
            github={secondProject.github}
            link={secondProject.link}/>
          <MyProjectsRight
            src={thirdProject.src}
            type={thirdProject.type}
            name={thirdProject.name}
            description={thirdProject.description}
            tech={thirdProject.tech}
            github={thirdProject.github}
            link={thirdProject.link}
          />
          <MyProjectsLeft
            src={fourthProject.src}
            type={fourthProject.type}
            name={fourthProject.name}
            description={fourthProject.description}
            tech={fourthProject.tech}
            github={fourthProject.github}
            link={fourthProject.link}/>
      <Contact/>
      <StickyLink/>
    </div>
  );
}


export default App;
