import React, { useState, useEffect } from "react";
import "./style.css";
// import "../styles/pretendard.css";
import imgCharacter1 from "./assets/character-1.svg";
import imgCharacter2 from "./assets/character-2.svg";
import imgCharacter3 from "./assets/character-3.svg";

const ClickerGame = () => {
  const [clickCount, setClickCount] = useState(0); // 클릭 횟수 관리
  const [randomCharacter, setRandomCharacter] = useState(imgCharacter1); // 랜덤 캐릭터 이미지 상태

  useEffect(() => {
    // 페이지 새로고침시 랜덤 캐릭터
    const characters = [imgCharacter1, imgCharacter2, imgCharacter3];
    const randomIndex = Math.floor(Math.random() * characters.length);
    setRandomCharacter(characters[randomIndex]);
  }, []);

  const handleClick = () => {
    if (clickCount < 30) {
      setClickCount(clickCount + 1);
    }
  };

  // 클릭 횟수에 따라 이미지 크기 변경
  const calculateSize = () => {
    if (clickCount >= 30) {
      return 300; // 30번 클릭 후의 크기
    } else if (clickCount >= 10) {
      return 200; // 10번 클릭 후의 크기
    } else {
      return 100; // 기본 크기
    }
  };

  return (
    <div>
      <div className="contents">
        <h1>
          {clickCount >= 30
            ? "Growth is complete!"
            : clickCount >= 10
            ? "Need more click..."
            : "Click Me!"
          }
        </h1>
        <img
          src={randomCharacter} // 랜덤 캐릭터
          alt="캐릭터"
          className="character"
          onClick={handleClick}
          style={{
            cursor: "pointer",
            width: `${calculateSize()}px`,
            height: `${calculateSize()}px`,
          }}
        />
        <p className="clickNum">Clicks: {clickCount}</p>
      </div>
    </div>
  );
};

export default ClickerGame;