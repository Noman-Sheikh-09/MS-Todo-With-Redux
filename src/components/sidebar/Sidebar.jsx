import React from "react";
import "./Sidebar.css";
import {Link} from 'react-router-dom'
export default function Sidebar({ closeSidebar }) {
  return (
    <>
      <div className="sidebar-bg">
        <i
          className="fa-solid fa-grip-lines"
          style={{
            fontSize: "30px", 
            marginLeft: "20px",
            color: "black",
          }}
          onClick={() => closeSidebar(false)}
        ></i>
        <ul> 
          <li> 
            <Link to="/"><i class="fa-solid fa-sun" ></i>My Day</Link>
          </li>
          <li>
            <Link to="/important"><i className="fa-solid fa-star" ></i>Improtant</Link>
          </li>
          <li>
            <Link to="/planning"><i className="fa-solid fa-calendar-days"></i>Planning</Link>
          </li>
          <li>
            <Link to="assigned_to_me"><i className="fa-solid fa-user-large"></i>Assigned to me</Link>
          </li>
          <li>
            <Link to="task"><i className="fa-solid fa-house"></i>Tasks</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
