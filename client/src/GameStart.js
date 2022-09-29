import React, { useState } from "react";

function GameStart({ handleClick }) {

  return (
      <div>
        <h1>Welcome to Wayfarer</h1>
        <p>A digital role playing adventure game based on multiple choice options and D&D style dice rolls and combat actions.</p>
        <h3>A few things before we begin.</h3>
        <br></br>
        <div id="welcomeHealth">
          <h2>Health</h2>
          <p>Health is what keeps you alive in the game. When you run out of health, the game will end.</p>
        </div>
        <br></br>
        <div id="welcomeStrength">
          <h2>Strength</h2>
          <p>Strength (STR) is how hard you hit something, how much you can carry, and how well you tend to do with strength based skill checks.</p>
        </div>
        <br></br>
        <div id="welcomeDefense">
          <h2>Defense</h2>
          <p>Defense is what helps protect you during a fight. A high defense leads to less health loss.</p>
        </div>
        <br></br>
        <div id="welcomeLuck">
          <h2>Luck</h2>
          <p>Luck is the main factor that helps you during dice rolls. When you try to complete an action, rolling a die helps determine if the action is successful. High luck contributes to more successful rolls.</p>
        </div>
        <div>
          <button className="normalButton" onClick={handleClick}>Click me to begin!</button>
        </div>
      </div>
  )
};

export default GameStart;