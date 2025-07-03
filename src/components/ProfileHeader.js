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
            <p>Computer Science, SRH University of Applied Sciences. </p>
            <p>
              Head of Study Programme B.Sc. & M.Sc., Leipzig Campus School of
              Technology and Architecture
            </p>
            <p>https://www.srh-berlin.de/en/</p>
          </p>
        </div>
        <div className="contact-info">
          <p>Fakhteh.Ghanbarnejad@srh-hochschulen.de</p>
          <p>SRH Prager Strase 47, 04157, Leipzig</p>
          <p>+49 123456789</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
