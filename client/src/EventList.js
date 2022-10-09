import React, { useEffect, useState } from "react";
// import Event from "./Event";

function EventList({ goToIslandMap, location, onEventSelect }) {
  const [allEvents, setAllEvents] = useState(location.events)
  const [eventsOptions, setEventsOptions] = useState()
  const [locationMusic, setLocationMusic] = useState('')

  const forestMusic = new Audio('https://audio.jukehost.co.uk/zkdzbDdAe5rkArhejjAsycueuONMzk4L')

  // Set events and set music
  useEffect(() => {
    setAllEvents(location.events)
    if (location.name === 'Volcano') {
      // play the volcano music
    } else if (location.name === 'Forest') {
      setLocationMusic(forestMusic)
    }
  }, [])

  // Play music
  useEffect(() => {
    if (locationMusic === '') {
      console.log('No Music')
    } else if (!locationMusic.paused) {
    } else {
      locationMusic.play()
    }
  }, [locationMusic])

  // Create a button for each event
  useEffect(() => {
    let allOptions = allEvents.map((event) => (event.is_complete ? console.log("") : 
    <div className="center" key={event.id}>
      <button className="normalButton" value={event.id} onClick={e => handleEventSelect(event)}>{event.name}</button>
    </div>
  ))
    setEventsOptions(allOptions)
  }, [allEvents])

  function handleEventSelect(event) {
    fetch(`/events/${event.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        is_complete: true
      })})
      .then((res) => res.json())
      .then((data) => console.log(data))
      onEventSelect(event)
    }

  // Return to Map page & pause music
  function backToMap() {
    if (locationMusic === '') {
    } else {
      locationMusic.pause()
    }
    goToIslandMap()
  }

  return (
    <div>
      <div className="center">
        <button className="normalButton" onClick={backToMap}>Back to Island Map</button>
      </div>
      <div>
        <img className="eventImg" src="https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/locations/volcano-event-cropped.jpg"></img>
        <h1>{location.name}</h1>
        <p>{location.description}</p>
        <br></br>
        {eventsOptions}
      </div>
    </div>
  )
};

export default EventList;