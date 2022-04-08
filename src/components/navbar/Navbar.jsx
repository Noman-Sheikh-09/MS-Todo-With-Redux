import React from "react";
import { useState } from "react";
import Launch from "../launch/Launch";
import Profile from "../profile/Profile";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  const [openLauncher, setOpenLauncher] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);


  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "DodgerBlue", width: "100%", height: "40px" }}
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
          <div className="col-md-2">
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                marginTop: "10px",
              }}
            >
              <h6 style={{ marginTop: "10px", marginLeft: "0px" }}>To Do</h6>
            </a>
          </div>
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
              className="fa-brands fa-app-store"
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
