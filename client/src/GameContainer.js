import React, { useEffect, useState } from "react";
import ChooseYourLocation from "./ChooseYourLocation";
import EventList from "./EventList";
import Event from "./Event";
import OptionResult from "./OptionResult";
import EndGame from "./EndGame"
import DieRoll from "./DieRoll"
import EvilReveal from "./EvilReveal";

function GameContainer({ character }) {
  const [location, setLocation] = useState()
  const [roll, setRoll] = useState()

  const eventList = <EventList character={character} location={location} onEventSelect={handleEventSelect} goToIslandMap={goToIslandMap} />
  const chooseYourLocation = <ChooseYourLocation onLocationSelect={handleLocationSelect} activateEndGame={activateEndGame} />
  const endGame = <EndGame />
  const dieRoll = <DieRoll passTheDie={passTheDie}/>
  const evilReveal = <EvilReveal />
  // const loadingPage = <LoadingPage location={location} locationWorkaround={locationWorkaround} />

  const [currentPage, setCurrentPage] = useState(evilReveal)

  function handleLocationSelect(e) {
    fetch('/locations-select', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.value,
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setLocation(data));
         } else {
          console.log("Location failed")
        }
  })}

  // Render EventList page with the correct location
  useEffect(() => {
    location ? setCurrentPage(eventList) : console.log('')
  }, [location])
        
  function returnToLocation(option) {
    fetch('/locations-select-again', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_id: option.event_id,
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setLocation(data));
         } else {
          console.log("Location failed")
        }
      })
  }

  function handleEventSelect(event) {
    const eventPage = <Event character={character} event={event} onOptionSelect={handleOptionSelect} />
    setCurrentPage(eventPage)
    setLocation(undefined)
  }

  function goToIslandMap() {
    setCurrentPage(chooseYourLocation)
  }

  function handleOptionSelect(option) {
    const optionResult = <OptionResult option={option} returnToLocation={returnToLocation} />
    setCurrentPage(optionResult)
  }

  function activateEndGame() {
    setCurrentPage(endGame)
  }

  function passTheDie(num) {
    setRoll(num)
  }
  
  return (
    <div className="gameArea">
      {currentPage}
    </div>
  )
};

export default GameContainer;