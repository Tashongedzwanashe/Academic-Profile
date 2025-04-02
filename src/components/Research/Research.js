import React from "react";
import { Outlet } from "react-router-dom";
import "./Research.css";

const Research = () => {
  return (
    <div className="research-container">
      <h1>Research</h1>
      <div className="research-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Research;
