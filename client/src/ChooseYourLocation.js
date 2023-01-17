import React, { useEffect, useState } from "react";

function ChooseYourLocation({ onLocationSelect }) {
  const [forestDone, setForestDone] = useState(false)
  const [volcanoDone, setVolcanoDone] = useState(false)
  const [beachDone, setBeachDone] = useState(false)
  const [ruinsDone, setRuinsDone] = useState(false)
  const [locationData, setLocationData] = useState('')
  const [forestData, setForestData] = useState('')
  const [volcanoData, setVolcanoData] = useState('')
  const [beachData, setBeachData] = useState('')
  const [ruinsData, setRuinsData] = useState('')

  // console.log(forestData.events)

  useEffect(() => {
    let f = 0
    let v = 0
    let b = 0
    let r = 0
    forestData.events.map(event => {
      if (event.is_complete === true){
        ++f
      }
    })
    console.log(f)
  }, [ruinsData])

  useEffect(() => {
    setForestDone(forestData.is_complete)
    setVolcanoDone(volcanoData.is_complete)
    setBeachDone(beachData.is_complete)
    setRuinsDone(ruinsData.is_complete)
  }, [ruinsData])
  
  useEffect(() => {
    fetch('/locations')
    .then((res) => res.json())
    .then((data) => setLocationData(data));
  }, [])

  useEffect(() => {
    if (locationData === '') {
      console.log('no location data')
    } else {
      locationData.map(location => {
        if (location.name === 'Forest'){
          setForestData(location)
        } else if (location.name === 'Volcano'){
          setVolcanoData(location)
        } else if (location.name === 'Beach'){
          setBeachData(location)
        } else if (location.name === "Ruins"){
          setRuinsData(location)
        }
      })
    }
  }, [locationData])

  

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