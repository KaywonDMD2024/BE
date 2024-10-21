import React from "react";
import StudentsHeader from "./components/StudentsHeader";
import ProfileComponent from "./components/ProfileComponent";

const Students = () => {
  return (
    <div>
      <StudentsHeader />
      <h1>클리커 게임</h1>
      <p>이곳에서 클리커 게임을 플레이하세요.</p>
      <ProfileComponent />
    </div>
  );
};

export default Students;
