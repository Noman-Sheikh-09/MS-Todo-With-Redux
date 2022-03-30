import React from "react";
import "./Profile.css";
import ProfileImage from "../../assets/profile.jpg";
export default function profile({ closeProfile }) {
  return (
    <>
      <div className="profile-bg">
        <div>
          <button onClick={() => closeProfile(false)} className='cancel-profile'> X </button>
        </div>
<div >
        <img src={ProfileImage} alt="" className="profile-img" />
        <h3>Muhammad Noman</h3>
        <p>nomanshk310@gmail.com </p>
      </div>
      </div>
    </>
  );
}
