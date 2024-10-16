import React from "react";
import { Link } from "react-router-dom";
import "./ProjectHeader.css";

const ProjectHeader = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>ALL</li>
        </Link>
        <Link to="/">
          <li>BRANDING</li>
        </Link>
        <Link to="/">
          <li>UI/UX</li>
        </Link>
        <Link to="/">
          <li>NEW MEDIA</li>
        </Link>
        <Link to="/">
          <li>MOVING IMAGE</li>
        </Link>
        <Link to="/">
          <li>GRADE</li>
        </Link>
      </ul>
    </div>
  );
};

export default ProjectHeader;
