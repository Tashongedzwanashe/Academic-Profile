import React from "react";
import { Outlet } from "react-router-dom";
import "./News.css";

const News = () => {
  return (
    <div className="news-container">
      <h1>News</h1>
      <div className="news-content">
        <Outlet />
      </div>
    </div>
  );
};

export default News;
