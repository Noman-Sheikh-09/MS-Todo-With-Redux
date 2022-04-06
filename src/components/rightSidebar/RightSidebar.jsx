import React from "react";

import "./RightSidebar.css";
export default function RightSidebar({ addTaskOpen }) {
  return (
    <>
    <div className="box-two" >
      {/* onChange Event  */}
    <input type="Radio"  />
    </div>
      <div className="box-one">
      

        <a href="#" className="add-step">
          <i class="fa-solid fa-plus"></i> Add Step
        </a>
      </div>
      <div className="box-two">
        <a href="#" className="add-step">
         
          <i class="fa-regular fa-brightness-low"></i> Added to My Day{" "}
        </a>
      </div>
      <div className="box-third">
        <li className="remind">
          
          <a href="#" className="add-step">
          <i class="fa-regular fa-bell"></i> Remind Me
          </a>
        </li>
        <li className="remind">
        
          <a href="#" className="add-step">
          <i class="fa-regular fa-calendar-days"></i> Add due date
          </a>
        </li>
        <li className="remind">
          
          <a href="#" className="add-step">
          <i class="fa-regular fa-rotate-right"></i> Repeat
          </a>
        </li>
      </div>
      <div className="box-two">
        <a href="#" className="add-step">
        <i class="fa-regular fa-square-check"></i>
           Pick a Category 
        </a>
      </div>
      <div className="box-two">
        <a href="#" className="add-step">
        
        <i class="fa-regular fa-plus-minus"></i>Add File 
        </a>
      </div>
    </>
  );
}
