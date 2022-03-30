import React from "react";
import "./Launch.css";
import OutLook from '../../assets/outlook.png';
import Teams from '../../assets/teams.png';
import Word from '../../assets/word.png'
export default function Launch({ closeLauncher }) {
  return (
    <>
      <div className="launcher-bg">
        {/* <button className='cancel-launcher' > Close  </button> */}
        <i
          className="fa-solid fa-grip"
          style={{
            marginTop: "20px",
            color: "black",
            marginLeft: "20px",
            cursor: "pointer",
            fontSize: "25px",
          }}
          onClick={() => closeLauncher(false)}
        ></i>

        <h3 className="launcher-heading">Microsoft 365</h3>
        <div>
          <ul>

            <li className="launcher-item">
              <img src={OutLook} alt=""  style={{wdith:'50px', height:'50px'}}/>
              Outlook</li>
            <li className="launcher-item">
            <img src={Teams } alt=""  style={{wdith:'50px', height:'50px'}}/>
              Teams</li>
            <li className="launcher-item">
            <img src={Teams } alt=""  style={{wdith:'50px', height:'50px'}}/> Excel </li>
            <li className="launcher-item">
            <img src={Teams } alt=""  style={{wdith:'50px', height:'50px'}}/>
              OneNote</li>
            <li className="launcher-item">
            <img src={Teams } alt=""  style={{wdith:'50px', height:'50px'}}/>
              Family Safety</li>
            <li className="launcher-item">
            <img src={ Word } alt=""  style={{wdith:'50px', height:'50px'}}/>
              Word </li>
            <li className="launcher-item">
            <img src={Teams } alt=""  style={{wdith:'50px', height:'50px'}}/>
               One Drive </li>
            {/* <li className="launcher-item">
            <img src={Teams } alt=""  style={{wdith:'50px', height:'50px'}}/>
               To Do </li>
            <li className="launcher-item">
              <img src={Teams } alt=""  style={{wdith:'50px', height:'50px'}}/>
               Calender </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
