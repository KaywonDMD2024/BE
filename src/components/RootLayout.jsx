import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./RootLayout.css";
import "../styles/pretendard.css";

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
      {/* Header======================================== */}
      <header>
        <div className="Logo">
          <Link to="/">
            <img src="#" alt="Logo" />
          </Link>
        </div>
        <div className="rightMenu">
          <Link className="menuLink" to="#">Projects</Link>
          <Link className="menuLink" to="#">Students</Link>

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
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer======================================== */}
      <footer>
        <div className="LeftFooter">
          <Link to="/">
            <img src="#" alt="Logo" />
          </Link>
          <p>
            경기도 의왕시 계원대학로 66(내손동) 계원예술대학교 16038
            <br />
            kaywondaehangno(Naeson-Dong), Uiwang-Si, Gyeonggi-DO, Korea
          </p>
          <p>ⓒ 2024. Delight Insight BE[biː] All Rights Reserved. </p>
        </div>
        
        <div className="RightFooter">
          <div className="LinkComponent">
            <Link to="/">
              <img src="../public/img/footer/insta.png" alt="Insta" />
            </Link>
            <Link to="/">
              <img src="../public/img/footer/youtube.png" alt="Youtube" />
            </Link>
            <Link to="/">
              <img src="../public/img/footer/blog.png" alt="Blog" />
            </Link>
          </div>
          <div className="Contact">
            <table>
              <tr>
                <td className="ContactTitle">Tell</td>
                <td>031-424-7509</td>
              </tr>
              <tr>
                <td className="ContactTitle">Fax</td>
                <td>01899-5823</td>
              </tr>
              <tr>
                <td className="ContactTitle">E-MAIL</td>
                <td>Kaywon@Kaywon.Ac.Kr</td>
              </tr>
            </table>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
