import React from "react";
import "./Projects.css";

const Projects = () => {
  // Sample project data - this can be replaced with data from an API or database
  const projects = [
    {
      id: 1,
      title: "Sample Project 1",
      description: "A brief description of the project and its objectives.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      id: 2,
      title: "Sample Project 2",
      description: "Another project description showcasing student work.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1>Student Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
