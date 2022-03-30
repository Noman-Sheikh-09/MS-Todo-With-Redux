import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import './MyDay.css'
export default function MyDay() {
  const [showSidebar, setShowSidebar] = useState(false);
  const day = new Date().getDay();
  const month = new Date().getMonth().toString();
  const date = new Date().getDate().toString();

  return (
    <>
      <i
        className="fa-solid fa-grip-lines"
        style={{
          fontSize: "30px",
          marginLeft: "20px",
          color: "grey",
        }}
        onClick={() => setShowSidebar(true)}
      ></i>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            {showSidebar && <Sidebar closeSidebar={setShowSidebar} />}
          </div>
          <div className="col-md-6">
            <h4>My Day ...</h4>
            <p>
              {day} - {date} - {month}
            </p>
            <div className="list">
              
              <input type="text" placeholder="Add Task"  className="add-place"/>
              <button className="add-btn"> Add </button>
            </div>
            
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      {/* {showSidebar && <Sidebar closeSidebar={setShowSidebar} />} */}
    </>
  );
}
