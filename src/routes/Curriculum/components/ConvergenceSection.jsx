import React, { useState } from "react";
import "./ConvergenceSection.css";

function ConvergenceSection() {
  const [activeCircle, setActiveCircle] = useState("CONVERGENCE");

  const handleHover = (circle) => {
    setActiveCircle(circle);
  };

  const handleMouseLeave = () => {
    setActiveCircle("CONVERGENCE");
  };

  return (
    <div className="convergence-section" onMouseLeave={handleMouseLeave}>
      <h2>{activeCircle}</h2>
      <p>
        {activeCircle === "CONVERGENCE" &&
          "디지털미디어산업의 창조적인 문화콘텐츠를 생산할 수 있는 인재 양성"}
        {activeCircle === "DESIGN" && (
          <>
            스튜디오 중심 <b>산학협력</b> 프로젝트 활성화
            <br />
            <b>크리에이티브 스튜디오</b> 활성화
            <br />
            사용자 경험 <b>UI/UX 스튜디오</b> 활성화
            <br />
            사용자 테스트 <b>UT 스튜디오</b> 활성화
            <br />
            <b>모션 스튜디오</b> 활성화
          </>
        )}

        {activeCircle === "MEDIA" && (
          <>
            현장중심 실무전문가 교육과정 <br />
            창의교육모델 NCS/KCS 교육과정 개발 운영 <br />
            산업체 주문식 교육과정 개발 운영 <br />
            직무 맞춤 세부전공 선택 <br />
            정기 산업체 리크루팅{" "}
          </>
        )}
        {activeCircle === "TECHNOLOGY" && (
          <>
            디자인 기술 융합산업 <br />
            선도형 콘텐츠 연구 개발 <br />
            피지컬 컴퓨팅 콘텐츠 연구 개발 <br />
            인터미디어 콘텐츠 연구 개발
          </>
        )}
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
      </div>
    </div>
  );
}

export default ConvergenceSection;
