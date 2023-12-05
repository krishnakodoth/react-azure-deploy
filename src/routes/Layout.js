import React from "react";
import logo from "../logo.png";
import profile from "../assets/images/krisk.png";
import { Outlet } from "react-router-dom";
import NavLinks from "./NavLinks";

const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Sample web application</h3>
        <div className="profile">
          <img alt="krishnakodoth" src={profile} />
          <span>Krishna Kodoth</span>
        </div>
      </header>
      <div className="App-content">
        <div className="SideNav" id="sidebar">
          <h1>Navigation</h1>
          <NavLinks />
        </div>
        <div className="Content">
          <Outlet />
        </div>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
