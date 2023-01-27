import { useEffect, useState } from "react";

function DieRoll () {
  const [roll, setRoll] = useState()

  function rollDice() {
    for (let i = 0; i < 10; i++) {
      console.log(i)
      setRoll(Math.ceil(Math.random() * 20))
    }
  }

  // function gameShow() {
  //   if (i < 10) {
  //     setInterval(rollDice, 10)
  //   } else if (i >)
  // }}
  
  return (
    <div className="center">
      <div>
        <h1>DieRoll</h1>
        <h2>{roll}</h2>
        <button className="normalButton" onClick={e => rollDice()}>Roll Again</button>
      </div>
    </div>
  )
};

export default DieRoll;