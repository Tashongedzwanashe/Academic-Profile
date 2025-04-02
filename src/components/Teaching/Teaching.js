import React from "react";
import { Outlet } from "react-router-dom";
import "./Teaching.css";

const Teaching = () => {
  return (
    <div className="teaching-container">
      <h1>Teaching</h1>
      <div className="teaching-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Teaching;
