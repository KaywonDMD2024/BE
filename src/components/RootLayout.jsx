import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./RootLayout.css";
import "../styles/pretendard.css";

const RootLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location

  // 특정 경로에서 header와 footer 숨기기
  const hideHeaderFooter = location.pathname === '/add-project';

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu automatically when the route changes
  useEffect(() => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  }, [location]);

  // Apply and remove overflow:hidden when menu is opened/closed
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Apply to html as well
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto"; // Reset overflow
    }

    // Cleanup to reset the overflow when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div>
      {/* Header======================================== */}
      {!hideHeaderFooter && (
        <header className="main_header">
          <div className="Logo">
            <Link to="/">
              <img src="/img/Logo.svg" alt="Logo" />
            </Link>
          </div>

          <div className="rightMenu">
            <Link className="menuLink" to="/Projects">
              Projects
            </Link>
            <Link className="menuLink studLink" to="/Students">
              Students
            </Link>

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
              <div className="hamList">
                <div className="leftList">
                  <Link to="/Curriculum">
                    <span className="hamburger-number">01 </span>
                    <span className="hamburger-title">Curriculum</span>
                  </Link>
                  <Link to="/Projects">
                    <span className="hamburger-number">02 </span>
                    <span className="hamburger-title">Project</span>
                  </Link>
                  <Link to="/Students">
                    <span className="hamburger-number">03 </span>
                    <span className="hamburger-title">Students</span>
                  </Link>
                </div>
                <div className="rightList">
                  <Link
                    className="contentsLink"
                    to="/"
                    onMouseEnter={() => setSubmenuOpen(true)}
                    onMouseLeave={() => setSubmenuOpen(false)}
                  >
                    <span className="hamburger-number">04 </span>
                    <span className="hamburger-title">Contents</span>

                    {/* sub menu rendering */}
                    {submenuOpen && (
                      <div className="contentsSub">
                        <Link to="/RollingPaper">Rolling in the B</Link>
                        <Link to="/ClickerGame">Clicker Game</Link>
                      </div>
                    )}
                  </Link>
                  <Link to="/Guestbook">
                    <span className="hamburger-number">05 </span>
                    <span className="hamburger-title">Guestbook</span>
                  </Link>
                  <Link to="/Credit">
                    <span className="hamburger-number">06 </span>
                    <span className="hamburger-title">Credit</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}

      <main className="main_main">
        <Outlet />
      </main>

      {/* Footer======================================== */}
      {!hideHeaderFooter && (
        <footer className="main_footer">
          <div className="LeftFooter">
            <Link to="/">
              <img src="/img/footerLogo.svg" alt="Logo" />
            </Link>
            <p className="address">
              경기도 의왕시 계원대학로 66(내손동) 계원예술대학교 16038
              <br />
              kaywondaehangno(Naeson-Dong), Uiwang-Si, Gyeonggi-DO, Korea
            </p>
            <p className="copyright">ⓒ 2024. Delight Insight BE[biː] All Rights Reserved. </p>
          </div>

          <div className="RightFooter">
            <div className="LinkComponent">
              <Link to="/">
                <img src="/img/footer/insta.png" alt="Insta" />
              </Link>
              <Link to="/">
                <img src="/img/footer/youtube.png" alt="Youtube" />
              </Link>
              <Link to="/">
                <img className="blog_img" src="/img/footer/blog.png" alt="Blog" />
              </Link>
            </div>
            <div className="Contact">
              <table>
                <tbody>
                  <tr>
                    <td className="ContactTitle">Tell</td>
                    <td className="ContactTxt">031-424-7509</td>
                  </tr>
                  <tr>
                    <td className="ContactTitle">Fax</td>
                    <td className="ContactTxt">01899-5823</td>
                  </tr>
                  <tr>
                    <td className="ContactTitle">E-MAIL</td>
                    <td className="ContactTxt">Kaywon@Kaywon.Ac.Kr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default RootLayout;
