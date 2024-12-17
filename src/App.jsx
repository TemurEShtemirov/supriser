import React, { useState } from "react";
import "./App.css";
import Flower from './assets/flower.png'
function App() {
  const [showBouquet, setShowBouquet] = useState(false);

  const createConfetti = () => {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }
  };

  const showFlowers = () => {
    setShowBouquet(true);
    createConfetti();
    setTimeout(() => {
      alert("Ты лучшая!");
    }, 4000);
  };

  return (
    <div className="App">
      <h1>Добро пожаловать, Bekzoda!</h1>
      <div className="compliment" style={{ animationDelay: "2s" }}>
        Ты невероятная и добрая!
      </div>
      <div className="compliment" style={{ animationDelay: "4s" }}>
        Твой рост делает тебя ещё очаровательнее!
      </div>
      <div className="compliment" style={{ animationDelay: "6s" }}>
        Ты — лучшая подруга, которую можно пожелать!
      </div>
      <button className="button" onClick={showFlowers}>
        Нажми меня!
      </button>
      {showBouquet && (
        <>
          <div className="flower-container">
            <img
              src="./vecteezy_ai-generated-a-bouquet-of-crimson-roses_41493806.png"
              alt="Bouquet"
              className="flowers"
            />
            <div className="animated-text">Ты лучшая! Это для тебя!</div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;