import React from "react";
import { useState } from "react";
import Launch from "../launch/Launch";
import Profile from "../profile/Profile";

export default function Navbar(props) {
  const [openLauncher, setOpenLauncher] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "DodgerBlue", width: "100%", height: "50px" }}
      >
        <div className="row">
          <div className="col-md-1">
            {/* //Grid Icon/ */}
            <i
              className="fa-solid fa-grip"
              style={{
                marginTop: "10px",
                color: "white",
                marginLeft: "10px",
                cursor: "pointer",
                fontSize: "25px",
              }}
              onClick={() => setOpenLauncher(true)}
            ></i>
          </div>

          <div className="col-md-2"></div>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Search"
              style={{
                width: "100%",
                height: "30px",
                marginTop: "8px",
                border: "1px solid DodgerBlue",
              }}
            />
          </div>
          <div className="col-md-1">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{
                marginTop: "10px",
                color: "white",
                marginLeft: "-10px",
                cursor: "pointer",
                fontSize: "25px",
              }}
            ></i>
          </div>
          <div className="col-md-1">
            <i
              className="fa-solid fa-gear"
              style={{
                marginTop: "10px",
                color: "white",
                marginLeft: "-10px",
                cursor: "pointer",
                fontSize: "25px",
              }}
            ></i>
            <i
              className="fa-solid fa-question"
              style={{
                marginTop: "10px",
                color: "white",
                fontSize: "25px",
                marginLeft: "30px",
                cursor: "pointer",
              }}
              // Help
            
            ></i>
          </div>
         
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <i
              className="fa-solid fa-person"
              style={{
                marginTop: "10px",
                color: "white",
                fontSize: "25px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onClick={() => setOpenProfile(true)}
            ></i>
            {openProfile && <Profile closeProfile={setOpenProfile} />}
          </div>
        </div>
      </div>

      {openLauncher && <Launch closeLauncher={setOpenLauncher} />}
    </>
  );
}
