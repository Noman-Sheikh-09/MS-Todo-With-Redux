import React from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
import './Planning.css'
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  addTask,
  deleteTask,
  updateTask,
} from "../../store/actions/TaskAction";
import { useSelector, useDispatch } from "react-redux";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

export default function Planning() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [addTaskOpen, setAddTaskOpen] = useState("");
  const taskList = useSelector((state) => state.AddReducer.list);
  const dispatch = useDispatch();
  const [showRightBar, setShowRightBar] = useState(false);

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
          <div className={(!showRightBar)?"col-md-9":"col-md-6"}>
            <h4  style={{color:'dodgerblue'}}>Planning ...</h4>
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
                onClick={() => setShowRightBar(true)}
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

            {taskList.map((value, id) => {
              return (
                <div
                  className="list"
                  onClick={() => setShowRightBar(true)}
                  key={id}
                >
                  <p className="add-place">{value.data}</p>

                  <i
                    className="fa-solid fa-star"
                    style={{
                      textAlign: "center",
                      color: "dodgerblue",
                      marginLeft: "30px",
                      cursor: "pointer",
                    }}
                  ></i>

                  <button
                    style={{
                      backgroundColor: "tomato",
                      border: "1px solid tomato",
                      padding: "0px 10px",
                      marginLeft: "350px",
                      marginTop: "1px",
                    }}
                    onClick={() => dispatch(deleteTask(value.id))}
                  >
                    Del
                  </button>
                  <button
                    style={{
                      backgroundColor: "green",
                      marginLeft: "10px",
                      padding: "0px 10px",
                      border: "1px solid green",
                      color: "white",
                    }}
                    onClick={() => dispatch(updateTask(value.id))}
                  >
                    Edit
                  </button>
                </div>
              );
            })}
          </div>
          <div className="col-md-3">
            {showRightBar && <RightSidebar closeRightBar={setShowRightBar} />}
          </div>
        </div>
      </div>
    </>
  );
}

