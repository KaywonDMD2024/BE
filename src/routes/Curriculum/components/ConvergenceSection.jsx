import React, { useState } from "react";
import "./ConvergenceSection.css";

function ConvergenceSection() {
  const [activeCircle, setActiveCircle] = useState("CONVERGENCE");

  const handleHover = (circle) => {
    setActiveCircle(circle);
  };

  return (
    <div className="convergence-section">
      <h2>{activeCircle}</h2>
      <p>
        {activeCircle === "CONVERGENCE" &&
          "디지털미디어산업의 창조적인 문화콘텐츠를 생산할 수 있는 인재 양성"}
        {activeCircle === "DESIGN" &&
          "스튜디오 중심, 사용자 경험, 사용성 테스트, 프로젝트 활성화"}
        {activeCircle === "MEDIA" &&
          "현장중심 실무전문가 교육과정, 창의교육모델 NCS/KCS 교육과정 개발 운영"}
        {activeCircle === "TECHNOLOGY" &&
          "디자인 기술 융합산업, 선도형 콘텐츠 연구 개발, 피지컬 컴퓨팅 콘텐츠 연구 개발"}
      </p>

      <div className="circle-container">
        <div
          className={`circle design ${activeCircle === "DESIGN" ? "active" : ""}`}
          onMouseEnter={() => handleHover("DESIGN")}
        >
          <p>Design</p>
        </div>
        <div
          className={`circle media ${activeCircle === "MEDIA" ? "active" : ""}`}
          onMouseEnter={() => handleHover("MEDIA")}
        >
          <p>Media</p>
        </div>
        <div
          className={`circle technology ${activeCircle === "TECHNOLOGY" ? "active" : ""}`}
          onMouseEnter={() => handleHover("TECHNOLOGY")}
        >
          <p>Technology</p>
        </div>
        <div className="convergence-center">
          <p>Convergence</p>
        </div>
      </div>
    </div>
  );
}

export default ConvergenceSection;
