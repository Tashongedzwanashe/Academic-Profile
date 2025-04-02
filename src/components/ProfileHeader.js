import React from "react";
import "./ProfileHeader.css";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="profile-content">
        <h1>Farkteh Ghanbarnejad</h1>
        <h2>Professor</h2>
        <div className="institution">
          <p>
            Computer Science, SRH University of Applied Sciences. Head of Study
            Programme B.Sc. & M.Sc., Leipzig Campus School of Technology and
            Architecture https://www.srh-berlin.de/en/
          </p>
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
