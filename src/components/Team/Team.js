import React from "react";
import { Outlet } from "react-router-dom";
import "./Team.css";

const Team = () => {
  return (
    <div className="team-container">
      <h1>Team</h1>
      <div className="team-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Team;
