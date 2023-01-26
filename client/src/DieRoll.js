function DieRoll () {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  let roll = getRandomInt(1, 21)
  
  
  return (
    <div className="center">
      <h1>DieRoll</h1>
      <br></br>
      <h3>{roll}</h3>
    </div>
  )
};

export default DieRoll;