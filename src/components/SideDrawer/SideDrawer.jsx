import React from 'react'
import "./sideDrawer.css"

export default function SideDrawer({sideDrawerOpen, setSideDrawerOpen}) {

  function handleSideDrawerClose(){
    setSideDrawerOpen(false)
  }

  const sideDrawerStyle = {
    right: sideDrawerOpen ? '0px' : '-400px',
  };
  
  return (
    <nav className='sideDrawer'style={sideDrawerStyle}>
        <ul>
            <li><a href="#about" onClick={handleSideDrawerClose}><span>01. </span>About</a></li>
            <li><a href="#projects" onClick={handleSideDrawerClose}><span>02. </span>Projects</a></li>
            <li><a href="#" onClick={handleSideDrawerClose}><span>03. </span>Experience</a></li>
            <li><a href="#contact" onClick={handleSideDrawerClose}><span>04. </span>Contact</a></li>
        </ul>
    </nav>
  )
}
