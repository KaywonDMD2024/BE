import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../assets/Ass.jpeg";
import "./ProfileComponent.css";

const profileComponent = () => {
  return (
    <div>
      <Link to="/">
        <img src={ProfileImg} alt="김재림" className="profileImg" />
      </Link>
      <span>박정우</span>
      <span>CATCHD | DESIGNER</span>
    </div>
  );
};

export default profileComponent;
