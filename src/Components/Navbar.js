import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="logo">
    
          <img
            className="sm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9XMEPsLUwL6Y6WAHlExyKKLlHPSd2f03BA&s"
            alt="Rosa Logo"
          />
   
      </div>
      <div className="toggle">
        <span className="first"></span>
        <span className="middle"></span>
        <span className="last"></span>
      </div>
      <div className="navigation-bar">
        <ul>
          <li >
            <NavLink to="/" >
              Home<span className="underline"></span>
            </NavLink>
          </li>
    
          <li>
            <NavLink to="/DataDisplay">
              DocSearch<span className="underline"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Healthupdate">
              HealthUpdate<span className="underline"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/insurance">
              Insurance<span className="underline"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Shop" >
              Shop<span className="underline"></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <button className="btn">LogIn</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

