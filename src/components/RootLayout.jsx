import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./RootLayout.css";

const RootLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu automatically when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div>
      <header>
        <Link to="/">
          <img src="#" alt="Logo" />
        </Link>
        <Link to="/projects">Projects</Link>
        <Link to="/students">Students</Link>

        {/* 메뉴 버튼 */}
        <div
          className={`hamburger-menu ${menuOpen ? "active" : ""}`}
          onClick={handleMenuClick}
        >
          <div className="hamburger-line line1"></div>
          <div className="hamburger-line line2"></div>
          <div className="hamburger-line line3"></div>
        </div>

        {/* 메뉴 목록 */}
        <div className={`dropdown-menu ${menuOpen ? "open" : ""}`}>
          <Link to="/Curriculum">
            <span className="hamburger-number">01</span>
            <span className="hamburger-title">Curriculum</span>
          </Link>
          <Link to="/Projects">
            <span className="hamburger-number">02</span>
            <span className="hamburger-title">Project</span>
          </Link>
          <Link to="/Students">
            <span className="hamburger-number">03</span>
            <span className="hamburger-title">Students</span>
          </Link>
          <Link to="/">
            <span className="hamburger-number">04</span>
            <span className="hamburger-title">Contents</span>
          </Link>
          <Link to="/Guestbook">
            <span className="hamburger-number">05</span>
            <span className="hamburger-title">Guestbook</span>
          </Link>
          <Link to="/about">
            <span className="hamburger-number">06</span>
            <span className="hamburger-title">Credit</span>
          </Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>
          <Link to="/">
            <img src="#" alt="Logo" />
          </Link>
          <p>
            16038 경기도 의왕시 계원대학로 66(내손동)
            <br />
            계원예술대학교 디자인관 5층 디지털미디어디자인과
          </p>
          <p>ⓒ 2024. Delight Insight BE[biː] All Rights Reserved</p>
        </div>
        <div className="RightFooter">
          <div className="LinkComponent">
            <Link to="/">
              <img src="#" alt="Logo" />
            </Link>
            <Link to="/">
              <img src="#" alt="Logo" />
            </Link>
            <Link to="/">
              <img src="#" alt="Logo" />
            </Link>
          </div>
          <p>Tell 031-424-7509</p>
          <p>Fax 01899-5823</p>
          <p>E-MAIL kaywon@kaywon.ac.kr</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
