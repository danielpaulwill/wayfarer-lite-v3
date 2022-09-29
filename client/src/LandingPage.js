import React from "react";

function LandingPage({ handleClick }) {

  return (
    <div id="welcome">
      <h1>GAME LOGO HERE</h1>
      <div>
        <button id="welcomeButton" onClick={handleClick}>Click me to begin!</button>
      </div>
    </div>
  )
};

export default LandingPage;