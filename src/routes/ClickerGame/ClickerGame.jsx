import React from "react";
import imgCharacter1 from "./assets/character-1.svg";
import imgCharacter2 from "./assets/character-2.svg";
import imgCharacter3 from "./assets/character-3.svg";

const ClickerGame = () => {
  return (
    <div>
      <h1>Click Me!</h1>
      <img src={imgCharacter1} alt="캐릭터1" className="character-1" />
    </div>
  );
};

export default ClickerGame;
