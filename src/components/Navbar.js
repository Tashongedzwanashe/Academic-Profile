import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [isTeachingOpen, setIsTeachingOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  const isResearchActive = location.pathname.startsWith("/research");
  const isTeachingActive = location.pathname.startsWith("/teaching");
  const isTeamActive = location.pathname.startsWith("/team");
  const isNewsActive = location.pathname.startsWith("/news");

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">FG</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li
          className={`dropdown ${isResearchOpen ? "open" : ""}`}
          onMouseEnter={() => setIsResearchOpen(true)}
          onMouseLeave={() => setIsResearchOpen(false)}
        >
          <Link
            to="/research"
            className={`dropdown-toggle ${isResearchActive ? "active" : ""}`}
          >
            Research
          </Link>
          <ul className={`dropdown-menu ${isResearchOpen ? "show" : ""}`}>
            <li>
              <Link
                to="/research/science"
                className={
                  location.pathname === "/research/science" ? "active" : ""
                }
              >
                Science
              </Link>
            </li>
            <li>
              <Link
                to="/research/projects"
                className={
                  location.pathname === "/research/projects" ? "active" : ""
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/research/publications"
                className={
                  location.pathname === "/research/publications" ? "active" : ""
                }
              >
                Publications
              </Link>
            </li>
            <li>
              <Link
                to="/research/collaborations"
                className={
                  location.pathname === "/research/collaborations"
                    ? "active"
                    : ""
                }
              >
                Collaborations
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown ${isTeachingOpen ? "open" : ""}`}
          onMouseEnter={() => setIsTeachingOpen(true)}
          onMouseLeave={() => setIsTeachingOpen(false)}
        >
          <Link
            to="/teaching"
            className={`dropdown-toggle ${isTeachingActive ? "active" : ""}`}
          >
            Teaching
          </Link>
          <ul className={`dropdown-menu ${isTeachingOpen ? "show" : ""}`}>
            <li>
              <Link
                to="/teaching/courses"
                className={
                  location.pathname === "/teaching/courses" ? "active" : ""
                }
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/teaching/student-projects"
                className={
                  location.pathname === "/teaching/student-projects"
                    ? "active"
                    : ""
                }
              >
                Student Projects
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown ${isTeamOpen ? "open" : ""}`}
          onMouseEnter={() => setIsTeamOpen(true)}
          onMouseLeave={() => setIsTeamOpen(false)}
        >
          <Link
            to="/team"
            className={`dropdown-toggle ${isTeamActive ? "active" : ""}`}
          >
            Team
          </Link>
          <ul className={`dropdown-menu ${isTeamOpen ? "show" : ""}`}>
            <li>
              <Link
                to="/team/lab-director"
                className={
                  location.pathname === "/team/lab-director" ? "active" : ""
                }
              >
                Lab Director
              </Link>
            </li>
            <li>
              <Link
                to="/team/phd-students"
                className={
                  location.pathname === "/team/phd-students" ? "active" : ""
                }
              >
                PhD Students
              </Link>
            </li>
            <li>
              <Link
                to="/team/masters-students"
                className={
                  location.pathname === "/team/masters-students" ? "active" : ""
                }
              >
                Masters Students
              </Link>
            </li>
            <li>
              <Link
                to="/team/alumni"
                className={location.pathname === "/team/alumni" ? "active" : ""}
              >
                Alumni
              </Link>
            </li>
            <li>
              <Link
                to="/team/assistants"
                className={
                  location.pathname === "/team/assistants" ? "active" : ""
                }
              >
                Assistants
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`dropdown ${isNewsOpen ? "open" : ""}`}
          onMouseEnter={() => setIsNewsOpen(true)}
          onMouseLeave={() => setIsNewsOpen(false)}
        >
          <Link
            to="/news"
            className={`dropdown-toggle ${isNewsActive ? "active" : ""}`}
          >
            News
          </Link>
          <ul className={`dropdown-menu ${isNewsOpen ? "show" : ""}`}>
            <li>
              <Link
                to="/news/events"
                className={location.pathname === "/news/events" ? "active" : ""}
              >
                Events
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/jobs"
            className={location.pathname === "/jobs" ? "active" : ""}
          >
            Jobs
          </Link>
        </li>
        <li>
          <Link
            to="/useful-links"
            className={location.pathname === "/useful-links" ? "active" : ""}
          >
            Useful Links
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
