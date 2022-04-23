import React from "react";
import { v4 as uuidv4 } from "uuid";
// import Sidebar from "../../components/sidebar/Sidebar";
import "./MyDay.css";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  addTask,
  deleteTask,
  updateTask,
  fvrtTask,
} from "../../store/actions/TaskAction";
import { useSelector, useDispatch } from "react-redux";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

export default function MyDay() {
  const [showSidebar, setShowSidebar] = useState(true);
  const day = new Date().getDay().toString();
  const month = new Date().getMonth().toString();
  const date = new Date().getFullYear().toString();
  const [addTaskOpen, setAddTaskOpen] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const taskList = useSelector((state) => state.AddReducer.list);
  const dispatch = useDispatch();
  const [showRightBar, setShowRightBar] = useState(false);
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState("");
  const [fvrt, setFvrt] = useState(false);
  // console.log(addTask);
  // const onEditHandler = (value, id) => {
  //   setAddTaskOpen(value);
  //   setIsEdit(true);
  // };
  const ctaEditHandler = (value) => {
    // let task ={}
    setFlag(true);
    setAddTaskOpen(value.task);
    setId(value.id);
    setFvrt(value.fvrt);
    // dispatch(updateTask(task))
    // setIsEdit(false)
  };
  const updateHandler = () => {
    const data = {
      task: addTaskOpen,
      id: id,
      fvrt: fvrt,
    };
    dispatch(updateTask(data, id));
    setAddTaskOpen("");
    setFlag(false);
  };

  const submitHandler = () => {
    const data = {
      task: addTaskOpen,
      id: uuidv4(),
      fvrt: false,
    };
    dispatch(addTask(data));
    setAddTaskOpen("");
  };
  const fvrtHandler = (value) => {
    const data = {
      task: value.task,
      id: value.id,
      fvrt: !value.fvrt,
    };
    dispatch(fvrtTask(data, value.id));
  };
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
          <div className={showSidebar ? "col-md-3" : "block"}>
            {showSidebar && <Sidebar closeSidebar={setShowSidebar} />}
          </div>
          {/* className={(!showSidebar)?"col-md-9":"col-md-12"} */}
          <div className={!showRightBar ? "col-md-9" : "col-md-6"}>
            <h4>My Day ...</h4>
            <p style={{ color: "gray", fontSize: "12px" }}>
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
                onClick={() => setShowRightBar(true)}
              ></i>
              {!flag ? (
                <button className="add-btn" onClick={submitHandler}>
                  Add
                </button>
              ) : (
                <button className="add-btn" onClick={updateHandler}>
                  Update
                </button>
              )}
            </div>

            {taskList.map((value, id) => {
              return (
                <div
                  
                  className="list"
                  key={id}
                >
                  <p className="add-place"
                  onClick={() => setShowRightBar(true)}>{value.task}</p>
                  {!value.fvrt ? (
                    <i
                      className="fa-solid fa-star"
                      onClick={() => fvrtHandler(value)}
                      style={{
                        textAlign: "center",
                        color: "dodgerblue",
                        marginLeft: "30px",
                        cursor: "pointer",
                      }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-star"
                      onClick={() => fvrtHandler(value)}
                      style={{
                        textAlign: "center",
                        color: "green",
                        marginLeft: "30px",
                        cursor: "pointer",
                      }}
                    ></i>
                  )}

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
                    onClick={() => ctaEditHandler(value)}
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

