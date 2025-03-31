import React from "react";
import Navbar from "./components/Navbar";
import ProfileHeader from "./components/ProfileHeader";
import Biography from "./components/Biography";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileHeader />
      <main className="main-content">
        <Biography />
        {/* Additional sections will be added here */}
      </main>
    </div>
  );
}

export default App;
