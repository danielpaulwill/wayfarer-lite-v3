import React, { useEffect, useState } from "react";

function ChooseYourLocation({ onLocationSelect }) {
  const [forestDone, setForestDone] = useState(false)
  const [volcanoDone, setVolcanoDone] = useState(false)
  const [beachDone, setBeachDone] = useState(false)
  const [ruinsDone, setRuinsDone] = useState(false)
  const [locationData, setLocationData] = useState('')

  // useEffect(() => {
  //   setForestDone(forestData.is_complete)
  //   setVolcanoDone(volcanoData.is_complete)
  //   setBeachDone(beachData.is_complete)
  //   setRuinsDone(ruinsData.is_complete)
  // }, [ruinsData])

  
  // fetch location data and set state
  useEffect(() => {
    fetch('/locations')
    .then((res) => res.json())
    .then((data) => setLocationData(data));
  }, [])
  
  // if locationData exists move on to event completeness verification
  useEffect(() => {
    if (locationData !== '') {
      locationData.map(location => {
        eventCompleteCheck(location)
      })
    }
  }, [locationData])

  // check if each event in a location is complete
  function eventCompleteCheck(location) {
    console.log({location})
    let i = 0
    if (location !== ''){
      location.events.map(event => {
        if (event.is_complete === true){
          ++i
    }})}
    if (i === 4){
      updateLocationComplete(location)
    }
  }

  // POST update to location
  function updateLocationComplete(location) {
    fetch(`/locations/${location.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        is_complete: true
      })})
      .then((res) => res.json())
      .then((location) => {
        // if 


        console.log(location)
      })
  }
  
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