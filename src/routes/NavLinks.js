import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome,FaUserAlt } from "react-icons/fa";

const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/Home'}>
          <FaHome /> Home
          </NavLink>
        </li>
        <li>
        <NavLink to={'/contacts'}>
            <FaUserAlt/> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
