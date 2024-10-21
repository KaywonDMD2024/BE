import React, { useRef } from "react";
import "./Curriculum.css";
import ConvergenceSection from "./components/ConvergenceSection";
import roadmap from "./assets/roadmap.svg";
import scrollDown from "./assets/scrolldown.svg";

const Curriculum = () => {
  const convergenceSectionRef = useRef(null);

  const handleScrollDownClick = () => {
    convergenceSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-content">
      {/* 상단 배너 섹션 */}
      <section className="banner-section">
        <h2>Digital Media Design</h2>
        <p className="banner-explanation">
          디지털미디어디자인과는 디자인과 과학기술, 그리고 미디어의 융합 교육과
          산업 수요를 반영한 스튜디오 중심의 <br />
          교육을 통해 디지털 미디어 산업의 창조적인 문화콘텐츠를 생산할 수 있는
          융합형 인재를 양성한다.
        </p>
        <div className="scrolldown-btn" onClick={handleScrollDownClick}>
          <p>Scroll Down</p>
          <img src={scrollDown} alt="Scroll Down" />
        </div>
      </section>

      {/* ConvergenceSection으로 스크롤되는 영역 */}
      <div ref={convergenceSectionRef}>
        <ConvergenceSection />
      </div>

      <div className="roadmapSection">
        <img src={roadmap} alt="로드맵" className="roadmap" />
      </div>
    </div>
  );
};

export default Curriculum;
