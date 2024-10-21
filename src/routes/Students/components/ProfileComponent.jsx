import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../assets/Ass.jpeg";
import "./ProfileComponent.css";

const ProfileComponent = ({ name, imageSrc }) => {
  return (
    <div className="profile-item">
      <Link to="/">
        <img src={ProfileImg} alt={name} />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default ProfileComponent;
