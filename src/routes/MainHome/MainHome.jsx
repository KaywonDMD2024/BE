import React from "react";
import "./MainHome.css";
import { Link } from "react-router-dom";

const MainHome = () => {
  return (
    <div>
      <h1>메인</h1>
      <Link to="/add-project">프로젝트 추가하기</Link>
    </div>
  );
};

export default MainHome;
