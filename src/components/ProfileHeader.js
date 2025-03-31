import React from "react";
import "./ProfileHeader.css";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="profile-content">
        <h1>Dirk Brockmann</h1>
        <h2>Director</h2>
        <div className="institution">
          <p>Center Synergy of Systems, TUD Dresden University of Technology</p>
        </div>
        <div className="contact-info">
          <p>dirk.brockmann@tu-dresden.de</p>
          <p>
            Georg-Schumann Str. 7a, 01069 Dresden | S7A | 2nd Floor | Room: 203
          </p>
          <p>+49 351 463 33 1 99</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
