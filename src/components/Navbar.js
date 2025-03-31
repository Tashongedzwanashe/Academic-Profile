import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">SynoSys</div>
      <ul className="nav-links">
        <li>
          <a href="#science">Science</a>
        </li>
        <li>
          <a href="#research">Research</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#publications">Publications</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#visualization">Visualization</a>
        </li>
        <li>
          <a href="#explorables">Explorables</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#jobs">Jobs</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
