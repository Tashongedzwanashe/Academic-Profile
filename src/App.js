import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";
import Biography from "./components/Biography";
import Research from "./components/Research/Research";
import Science from "./components/Research/Science/Science";
import Projects from "./components/Research/Projects/Projects";
import Publications from "./components/Research/Publications/Publications";
import Collaborations from "./components/Research/Collaborations/Collaborations";
import Teaching from "./components/Teaching/Teaching";
import Courses from "./components/Teaching/Courses/Courses";
import StudentProjects from "./components/Teaching/StudentProjects/StudentProjects";
import Team from "./components/Team/Team";
import LabDirector from "./components/Team/LabDirector/LabDirector";
import PhDStudents from "./components/Team/PhDStudents/PhDStudents";
import MastersStudents from "./components/Team/MastersStudents/MastersStudents";
import Alumni from "./components/Team/Alumni/Alumni";
import Assistants from "./components/Team/Assistants/Assistants";
import News from "./components/News/News";
import Events from "./components/News/Events/Events";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Jobs from "./components/Jobs/Jobs";
import UsefulLinks from "./components/UsefulLinks/UsefulLinks";
import "./App.css";

// Create a wrapper component to handle the conditional rendering of ProfileHeader
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      <Navbar />
      {isHomePage && <ProfileHeader />}
      <main
        className={`main-content ${!isHomePage ? "no-profile-header" : ""}`}
      >
        <Routes>
          <Route path="/" element={<Biography />} />
          <Route path="/research" element={<Research />}>
            <Route index element={<Science />} />
            <Route path="science" element={<Science />} />
            <Route path="projects" element={<Projects />} />
            <Route path="publications" element={<Publications />} />
            <Route path="collaborations" element={<Collaborations />} />
          </Route>
          <Route path="/teaching" element={<Teaching />}>
            <Route index element={<Courses />} />
            <Route path="courses" element={<Courses />} />
            <Route path="student-projects" element={<StudentProjects />} />
          </Route>
          <Route path="/team" element={<Team />}>
            <Route index element={<LabDirector />} />
            <Route path="lab-director" element={<LabDirector />} />
            <Route path="phd-students" element={<PhDStudents />} />
            <Route path="masters-students" element={<MastersStudents />} />
            <Route path="alumni" element={<Alumni />} />
            <Route path="assistants" element={<Assistants />} />
          </Route>
          <Route path="/news" element={<News />}>
            <Route index element={<Events />} />
            <Route path="events" element={<Events />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/useful-links" element={<UsefulLinks />} />
        </Routes>
      </main>
    </div>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
