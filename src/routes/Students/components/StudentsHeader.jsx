import React from "react";
import { Link } from "react-router-dom";
import "./StudentsHeader.css";

const StudentsHeader = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>ALL</li>
        </Link>
        <Link to="/">
          <li>Planner</li>
        </Link>
        <Link to="/">
          <li>Designer</li>
        </Link>
        <Link to="/">
          <li>Programmer</li>
        </Link>
        <li>
          <input type="text" placeholder="Search" />
        </li>
      </ul>
    </div>
  );
};

export default StudentsHeader;
