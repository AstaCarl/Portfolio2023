import React from "react";
import "../Toolbar/toolbar.css"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import SideDrawer from "../SideDrawer/SideDrawer";

export default function Toolbar({sideDrawerOpen, setSideDrawerOpen}) {

    return (
        <header className="container p-0 w-100">
        <nav className="row justify-content-center align-items-center">
            <div className="col-11 col-lg-10 m-4 p-0 toolbarNavigation">
                <a className="toolbarLogo" href="#"><span>ASTA CARL</span></a>
            <ul className="toolbarNavigationItems">
                    <li><a href="#">about</a></li>
                    <li><a href="#">projects</a></li>
                    <li><a href="#">experience</a></li>
                    <li><a href="#">contact</a></li>
                </ul>

                <div className="drawerToggleButton"><DrawerToggleButton
            sideDrawerOpen={sideDrawerOpen}
            setSideDrawerOpen={setSideDrawerOpen}/></div>
            </div>
        </nav>
        <SideDrawer 
        sideDrawerOpen={sideDrawerOpen}
        setSideDrawerOpen={setSideDrawerOpen}/>
    </header>
    )
}