import { useEffect, useState } from "react";

function DieRoll () {
  const [roll, setRoll] = useState()

  function rollDice() {
    setRoll(Math.ceil(Math.random() * 20))
  }

  function gameShow() {
    let i = 0
    if (i < 10) {
      setInterval(rollDice, 10)
    // } else if (i >)
  }}
  
  useEffect(() => {
    let rollOne = rollDice()
    setRoll(rollOne)
  }, [])
  
  return (
    <div className="center">
      <div>
        <h1>DieRoll</h1>
        <h2>{roll}</h2>
        <button className="normalButton" onClick={e => gameShow()}>Roll Again</button>
      </div>
    </div>
  )
};

export default DieRoll;