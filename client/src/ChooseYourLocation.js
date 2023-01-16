import React, { useEffect, useState } from "react";

function ChooseYourLocation({ onLocationSelect }) {
  const [forestDone, setForestDone] = useState(false)
  const [locationData, setLocationData] = useState('')

  console.log({locationData})

  useEffect(() => {
    fetch('/locations')
    .then((res) => res.json())
    .then((data) => setLocationData(data));
  }, [])

  

  // for disabled location select, id="null" disabled
  // for button, className="nullButton"
 
  return (
    <div id="chooseYourLocation">
      <button id={forestDone ? "null" : "forestMap"} value="Forest" onClick={onLocationSelect} disabled={forestDone} >
        <h2 className="locationHeader">Forest</h2>
        <button className={forestDone ? "nullButton" : "locationButton"} value="Forest" onClick={onLocationSelect} disabled={forestDone}></button>
      </button>
      <button id="volcanoMap" value="Volcano" onClick={onLocationSelect}>
        <h2 className="locationHeader">Volcano</h2>
        <button className="locationButton" value="Volcano" onClick={onLocationSelect}></button>
      </button>
      <button id="beachMap" value="Beach" onClick={onLocationSelect}>
        <h2 className="locationHeader">Beach</h2>
        <button className="locationButton" value="Beach" onClick={onLocationSelect}></button>
      </button>
      <button id="ruinsMap" value="Ruins" onClick={onLocationSelect}>
        <h2 className="locationHeader">Ruins</h2>
        <button className="locationButton" value="Ruins" onClick={onLocationSelect}></button>
      </button>
    </div>
  )
};

export default ChooseYourLocation;