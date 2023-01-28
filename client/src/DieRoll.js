import { useEffect, useState } from "react";

function DieRoll () {
  const [roll, setRoll] = useState()

  let i = 0

  function rollDice() {
    setTimeout(function() {
      setRoll(Math.ceil(Math.random() * 20))
      i++;
      if (i < 12) {
        rollDice();
      }
    }, 65)
  }


  // function gameShow() {
  //   if (i < 10) {
  //     setInterval(rollDice, 10)
  //   } else if (i >)
  // }}
  
  return (
    <div id="dice">
      <div>
        <h2>{roll}</h2>
        <button className="normalButton" onClick={e => rollDice()}>Roll Dice</button>
      </div>
    </div>
  )
};

export default DieRoll;