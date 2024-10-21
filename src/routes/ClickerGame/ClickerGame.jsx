import React, { useState, useEffect } from "react";
import imgCharacter1 from "./assets/character-1.svg";
import imgCharacter2 from "./assets/character-2.svg";
import imgCharacter3 from "./assets/character-3.svg";

const ClickerGame = () => {
  const [clickCount, setClickCount] = useState(0); // 클릭 횟수 관리

  const handleClick = () => {
    // 30이 될 때까지 클릭 횟수 증가
    if (clickCount < 30) {
      setClickCount(clickCount + 1);
    }
  };

  return (
    <div>
      <h1>
        {clickCount >= 30
          ? "Growth is complete!"
          : clickCount >= 10
          ? "Need more click..."
          : "Click Me!"
        }
      </h1>
      <img
        src={
          clickCount >= 30 ? imgCharacter3
            : clickCount >= 10 ? imgCharacter2
            : imgCharacter1
        }
        alt="캐릭터"
        className="character"
        onClick={handleClick} // 클릭 이벤트 핸들러
        style={{ cursor: "pointer" }} // 커서 스타일 추가
      />
      <p>Clicks: {clickCount}</p>
    </div>
  );
};

export default ClickerGame;