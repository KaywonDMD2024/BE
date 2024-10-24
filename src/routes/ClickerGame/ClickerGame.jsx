import React, { useState, useEffect } from "react";
import "./ClickerGame.css";
import imgCharacter1 from "./assets/character-1.svg";
import imgCharacter2 from "./assets/character-2.svg";
import imgCharacter3 from "./assets/character-3.svg";

const ClickerGame = () => {
  const [clickCount, setClickCount] = useState(0); // 클릭 횟수 관리
  const [initialCharacter, setInitialCharacter] = useState(null); // 처음 캐릭터 이미지
  const [secondCharacter, setSecondCharacter] = useState(null); // 2단계 캐릭터 이미지
  const [finalCharacter, setFinalCharacter] = useState(null); // 3단계(최종) 캐릭터 이미지

  const characters = [
    imgCharacter1,
    imgCharacter2,
    imgCharacter3
  ];

  useEffect(() => {
    // 페이지 새로고침 후 첫번째 랜덤 배정 캐릭터
    const randomIndex = Math.floor(Math.random() * characters.length);
    setInitialCharacter(characters[randomIndex]);
  }, []); // 페이지 로드 시 한 번만 실행

  const handleClick = () => {
    if (clickCount < 30) {
      setClickCount(clickCount + 1);
    }

    if (clickCount + 1 === 10 && !secondCharacter) {
      // 10번 클릭 시, 첫 번째 캐릭터를 제외한 캐릭터 중 랜덤으로 선택
      const availableCharacters = characters.filter(
        (character) => character !== initialCharacter
      );
      const randomIndex = Math.floor(Math.random() * availableCharacters.length);
      setSecondCharacter(availableCharacters[randomIndex]);
    }

    if (clickCount + 1 === 30 && !finalCharacter) {
      // 30번 클릭 시, 첫 번째 캐릭터와 두 번째 캐릭터를 제외한 캐릭터 선택
      const availableCharacters = characters.filter(
        (character) =>
          character !== initialCharacter && character !== secondCharacter
      );
      setFinalCharacter(availableCharacters[0]);
    }
  };

  // 캐릭터 크기를 결정하는 함수
  const getCharacterSize = () => {
    if (clickCount >= 30) {
      return 350; // 30번 클릭 후 크기
    } else if (clickCount >= 10) {
      return 250; // 10번 클릭 후 크기
    } else {
      return 150; // 초기 크기
    }
  };

  const getCurrentCharacter = () => {
    if (clickCount >= 30) {
      return finalCharacter; // 3단계(최종) 캐릭터
    } else if (clickCount >= 10) {
      return secondCharacter; // 2단계 캐릭터
    } else {
      return initialCharacter; // 처음 랜덤으로 선택된 캐릭터
    }
  };

  return (
    <div>
      <main>
        <div className="contents">
          <h1>
            {clickCount >= 30
              ? "Growth is complete!"
              : clickCount >= 10
              ? "Need more click..."
              : "Click Me!"
            }
          </h1>
          <div className="character">
            <p className="clickTxt-left">Click Me!</p>
            <div className="img_box">
              {initialCharacter && (
                <img
                  src={getCurrentCharacter()} // 현재 상태에 따라 캐릭터 이미지 선택
                  alt="캐릭터"
                  className="character_img"
                  onClick={handleClick}
                  style={{ 
                    cursor: "pointer",
                    width: `${getCharacterSize()}px`, // 클릭 횟수에 따른 크기 변화
                    height: `${getCharacterSize()}px` // 클릭 횟수에 따른 크기 변화
                  }}
                />
              )}
            </div>
            <p className="clickTxt-right">Click Me!</p>
          </div>
          <p className="clickNum">{String(clickCount).padStart(2, '0')}</p> {/* 여기에서 두 자리로 표시 */}
        </div>
      </main>
    </div>
  );
};

export default ClickerGame;