import { useEffect, useState } from "react";

function DieRoll ({ roll, passTheDie }) {
  // const [roll, setRoll] = useState("-")
  const [localRoll, setLocalRoll] = useState()

  useEffect(() => {
    setLocalRoll(roll)
  }, [roll])

  let i = 0

  
  // if (i === 12) {
  //   let i = 0
  // }
  
  function rollDice() {
    console.log(i)
    setTimeout(function() {
      let n = (Math.ceil(Math.random() * 20))
      passTheDie(n)
      i++;
      if (i < 12) {
        rollDice();
      }
    }, 65)
  }
  
  return (
    <div id="dice">
      <div>
        <h2>{localRoll}</h2>
        <button className="normalButton" onClick={e => rollDice()}>Roll Dice</button>
      </div>
    </div>
  )
};

export default DieRoll;