import React from "react";
import { Outlet, Link } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <img src="#" alt="Logo" />
        <Link to="/projects">Projects</Link>
        <Link to="/students">Students</Link>
        <div className="NavBtn">
          <img src="#" alt="Navigation Button" />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default RootLayout;
