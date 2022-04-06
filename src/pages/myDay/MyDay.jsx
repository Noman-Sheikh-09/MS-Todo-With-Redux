import React from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
import "./MyDay.css";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { addTask, deleteTask } from "../../store/actions/TaskAction";
import { useSelector, useDispatch } from "react-redux";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

export default function MyDay() {
  const [showSidebar, setShowSidebar] = useState(false);
  const day = new Date().getDay();
  const month = new Date().getMonth().toString();
  const date = new Date().getDate().toString();
  const [addTaskOpen, setAddTaskOpen] = useState("");
  const taskList = useSelector((state) => state.AddReducer.list);
  const dispatch = useDispatch();
  // console.log(addTask);
  return (
    <div>
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
              <input
                type="text"
                placeholder="Add Task"
                className="add-place"
                value={addTaskOpen}
                onChange={(e) => setAddTaskOpen(e.target.value)}
              />
              <i
                className="fa-regular fa-calendar-days"
                style={{ marginLeft: "40px", color: "gray", cursor: "pointer" }}
              ></i>
              <i
                className="fa-regular fa-bell"
                style={{ marginLeft: "15px", color: "gray", cursor: "pointer" }}
              ></i>
            
              <button
                className="add-btn"
                onClick={() =>
                  dispatch(addTask(addTaskOpen), setAddTaskOpen(""))
                }
              >
                Add
              </button>
              </div>
            
              {
                taskList.map((value,id )=>{
                  return (
                    <div className="list" key={id}>
                    <p  className="add-place">
                     
                     {value.data}
                     
                      </p>
                     <button
                className="add-btn"
                onClick={() =>
                  dispatch(deleteTask(value.id))
                }
              >
               Del 
              </button>
              <hr />
                    </div>
                  )
                 
                })
              }
         </div>
<div className="col-md-3">
 {/* <RightSidebar/> */}
</div>
       </div>
     </div>
           
          
    </div>
  );
}





