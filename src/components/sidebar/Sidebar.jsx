import React from "react";
import "./Sidebar.css";
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
            <a href="#">My Day</a>
          </li>
          <li>
            <a href="#">Improtant</a>
          </li>
          <li>
            <a href="#">Planning</a>
          </li>
          <li>
            <a href="#">Assigned to me</a>
          </li>
          <li>
            <a href="#">Tasks</a>
          </li>
        </ul>
      </div>
    </>
  );
}
