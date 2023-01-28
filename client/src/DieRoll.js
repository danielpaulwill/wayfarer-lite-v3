import { useEffect, useState } from "react";

function DieRoll ({ passTheDie }) {
  const [roll, setRoll] = useState("-")
  const [activation, setActivation] = useState(false)

  let i = 0
  
  useEffect(() => {
    passTheDie(roll)
  }, [activation])
  
  function rollDice() {
    setTimeout(function() {
      setRoll(Math.ceil(Math.random() * 20))
      i++;
      if (i < 12) {
        rollDice();
      }
      if (i === 12) {
        setActivation(activation => !activation)
      }
    }, 65)
  }
  
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