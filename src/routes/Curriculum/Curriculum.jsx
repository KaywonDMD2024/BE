import React from "react";
import "./Curriculum.css";
import ConvergenceSection from "./components/ConvergenceSection";

const Curriculum = () => {
  return (
    <div className="main-content">
      {/* 상단 배너 섹션 */}
      <section className="banner-section">
        <h2>Digital Media Design</h2>
        <p>
          디지털미디어디자인과는 디지털 과학기술, 그리고 미디어와 예술 교육과
          산업 수요를 반영할 수 있도록 창의성 교육을 통해 디지털 미디어 산업의
          창조적인 문화콘텐츠를 생산할 수 있는 인재를 양성한다.
        </p>
        <p>Scroll Down</p>
      </section>
      <ConvergenceSection />
    </div>
  );
};

export default Curriculum;
