import React, { useEffect, useState } from "react";
import ChooseYourLocation from "./ChooseYourLocation";
import EventList from "./EventList";
import Event from "./Event";
import OptionResult from "./OptionResult";

function GameContainer() {
  
  const [location, setLocation] = useState()
  // const [selectedLocation, setSelectedLocation] = useState('')

  const eventList = <EventList location={location} onEventSelect={handleEventSelect} goToIslandMap={goToIslandMap} />
  const chooseYourLocation = <ChooseYourLocation onLocationSelect={handleLocationSelect} />
  // const loadingPage = <LoadingPage location={location} locationWorkaround={locationWorkaround} />

  const [currentPage, setCurrentPage] = useState(chooseYourLocation)

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
    const eventPage = <Event event={event} onOptionSelect={handleOptionSelect} />
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
  
  return (
    <div className="gameArea">
      {currentPage}
    </div>
  )
};

export default GameContainer;