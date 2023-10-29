import React from 'react'
import "../SideDrawer/drawerToggleButton.css"

export default function DrawerToggleButton({sideDrawerOpen, setSideDrawerOpen}) {

  function handleSideDrawerOpen(){
    setSideDrawerOpen(!sideDrawerOpen)
  }

  const toggleButtonClass = sideDrawerOpen ? 'toggle open' : 'toggle closed';


  return (
    <div>
      <input type="checkbox" id='checkbox' onClick={handleSideDrawerOpen}/>
     <label for="checkbox" class="toggle" className={toggleButtonClass}>
         <div className="bars" id="bar1"></div>
         <div className="bars" id="bar2"></div>
         <div className="bars" id="bar3"></div>
     </label>
     </div>
  )
}
