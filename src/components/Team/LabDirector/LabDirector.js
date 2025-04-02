import React from "react";
import "./LabDirector.css";

const LabDirector = () => {
  return (
    <div className="lab-director-container">
      <h2>Lab Director</h2>
      <div className="lab-director-content">
        <div className="director-profile">
          <h3>Prof. Fakhteh Ghanbarnejad</h3>
          <h4>فاخته قنبرنژاد</h4>
          <div className="director-info">
            <p>
              Professor of Computer Science at SRH University of Applied
              Sciences
            </p>
            <p>Head of Study Programme B.Sc. & M.Sc., Leipzig Campus</p>
            <p>School of Technology and Architecture</p>

            <div className="director-roles">
              <h4>Current Roles:</h4>
              <ul>
                <li>Editorial Board Member of PLOS ONE</li>
                <li>Editorial Board Member of Complexity</li>
                <li>
                  Elected Co-chair of Physics of Socio-Economic Systems Division
                  (SOE), German Physical Society (DPG)
                </li>
              </ul>
            </div>

            <div className="director-link">
              <p>
                <a
                  href="https://sites.google.com/view/fakhtehgh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-link"
                >
                  Visit Full Profile →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDirector;
