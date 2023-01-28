import React, { useEffect, useState } from "react";

function ChooseYourLocation({ onLocationSelect, activateEndGame }) {
  const [locationData, setLocationData] = useState('')
  const [forestDone, setForestDone] = useState(false)
  const [volcanoDone, setVolcanoDone] = useState(false)
  const [beachDone, setBeachDone] = useState(false)
  const [ruinsDone, setRuinsDone] = useState(false)
  const [villageDone, setVillageDone] = useState(false)
  const [villageVisible, setVillageVisible] = useState(false)

  // check if all locations are done, if yes, village appears
  useEffect(() => {
    if (forestDone === true && volcanoDone === true && beachDone === true && ruinsDone === true) {
      setVillageVisible(true)
    }  
  }, [forestDone, volcanoDone, beachDone, ruinsDone])

  // fetch location data and set state
  useEffect(() => {
    fetch('/locations')
    .then((res) => res.json())
    .then((data) => setLocationData(data));
  }, [])
  
  // if locationData exists move on to event completeness verification
  useEffect(() => {
    if (locationData !== '') {
      locationData.forEach(location => {
        // check if each event in a location is complete
        let i = 0
        if (location !== ''){
          location.events.forEach(event => {
          if (event.is_complete === true){
            ++i
          }})}
          if (location.events.length === i){
            updateLocationComplete(location)
          }
      })
    }
  }, [locationData])

  useEffect(() => {
    if (villageDone === true){
      activateEndGame()
    }
  }, [villageDone])


  // function eventCompleteCheck(location) {
  //   let i = 0
  //   if (location !== ''){
  //     location.events.map(event => {
  //       if (event.is_complete === true){
  //         ++i
  //   }})}
  //   if (location.events.length === i){
  //     updateLocationComplete(location)
  //   }
  // }

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
        if (location.name === 'Forest'){
          setForestDone(location.is_complete)
        } else if (location.name === 'Volcano'){
          setVolcanoDone(location.is_complete)
        } else if (location.name === 'Beach'){
          setBeachDone(location.is_complete)
        } else if (location.name === 'Ruins'){
          setRuinsDone(location.is_complete)
        } else if (location.name === "Village"){
          setVillageDone(location.is_complete)
        }
      })
  }
  
  // for disabled location select, id="null" disabled
  // for button, className="nullButton"
  
  return (
    <div id="chooseYourLocation">
      <button id={forestDone ? "forestNull" : "forestMap"} value="Forest" onClick={onLocationSelect} disabled={forestDone} >
        <h2 className="locationHeader">{forestDone ? "Forest Completed" : "Forest"}</h2>
        <button className={forestDone ? "nullButton" : "locationButton"} value="Forest" onClick={onLocationSelect} disabled={forestDone}></button>
      </button>
      <button id={volcanoDone ? "volcanoNull" : "volcanoMap"} value="Volcano" onClick={onLocationSelect} disabled={volcanoDone}>
        <h2 className="locationHeader">{volcanoDone ? "Volcano Completed" : "Volcano"}</h2>
        <button className={volcanoDone ? "nullButton" : "locationButton"} value="Volcano" onClick={onLocationSelect} disabled={volcanoDone}></button>
      </button>
      <button id={villageVisible ? "villageMap" : "villageNull"} value="Village" onClick={onLocationSelect}>
        <h2 className="locationHeader">Village</h2>
        <button className="locationButton" value="Village" onClick={onLocationSelect}></button>
      </button>
      <button id={beachDone ? "beachNull" : "beachMap"} value="Beach" onClick={onLocationSelect} disabled={beachDone}>
        <h2 className="locationHeader">{beachDone ? "Beach Completed" : "Beach"}</h2>
        <button className={beachDone ? "nullButton" : "locationButton"} value="Beach" onClick={onLocationSelect} disabled={beachDone}></button>
      </button>
      <button id={ruinsDone ? "ruinsNull" : "ruinsMap"} value="Ruins" onClick={onLocationSelect} disabled={ruinsDone}>
        <h2 className="locationHeader">{ruinsDone ? "Ruins Completed" : "Ruins"}</h2>
        <button className={ruinsDone ? "nullButton" : "locationButton"} value="Ruins" onClick={onLocationSelect} disabled={ruinsDone}></button>
      </button>
    </div>
  )
};

export default ChooseYourLocation;