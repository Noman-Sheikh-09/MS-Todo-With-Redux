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
            <Link to="/">My Day</Link>
          </li>
          <li>
            <Link to="/important">Improtant</Link>
          </li>
          <li>
            <Link to="/planning">Planning</Link>
          </li>
          <li>
            <Link to="assigned_to_me">Assigned to me</Link>
          </li>
          <li>
            <Link to="task">Tasks</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
