import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { addTask, deleteTask } from "../../store/actions/TaskAction";
import { useSelector, useDispatch } from "react-redux";
import "./MyDay.css";
export default function MyDay() {
  const [showSidebar, setShowSidebar] = useState(false);
  const day = new Date().getDay();
  const month = new Date().getMonth().toString();
  const date = new Date().getDate().toString();
  const [addTaskOpen, setAddTaskOpen] = useState("");
  const taskList = useSelector((state) => state.AddReducer.data);
  const dispatch = useDispatch();

  // console.log(addTask);
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
              <input
                type="text"
                placeholder="Add Task"
                className="add-place"
                value={addTaskOpen}
                onChange={(e) => setAddTaskOpen(e.target.value)}
              />
              <button
                className="add-btn"
                onClick={() =>
                  dispatch(addTask(addTaskOpen), setAddTaskOpen(""))
                }
              > 
                Add
              </button>
            </div>
            {/* This will be a components  */}

            {
            taskList.map((elem) => {
              return (
                <div className="list" key={elem.id} >
                  <p  className="add-place">
                    {elem.data}
                  </p>
                  <button
                    className="add-btn"
                    style={{
                      backgroundColor: "green",
                      border: "1px solid green",
                    }}
                    onClick={() => dispatch(deleteTask(elem.id))}
                  > 
                    X
                  </button>
                </div>
              );
            })}
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      {/* {showSidebar && <Sidebar closeSidebar={setShowSidebar} />} */}
    </>
  );
}
