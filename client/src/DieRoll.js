import { useEffect, useState } from "react";

function DieRoll () {
  const [roll, setRoll] = useState()

  function rollDice() {
    return Math.floor(Math.random() * 4) + 1;
  }
  
  useEffect(() => {
    let rollOne = rollDice()
    setRoll(rollOne)
  }, [])

  
  return (
    <div className="center">
      <div>
        <h1>DieRoll</h1>
        <h2>{roll}</h2>
        <button className="normalButton" onClick={e => setRoll(rollDice())}>Roll Again</button>
      </div>
    </div>
  )
};

export default DieRoll;