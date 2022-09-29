import React, { useEffect, useState, useRef } from "react";
import Event from "./Event";

function EventList({ goToIslandMap, location, onEventSelect }) {
  const [allEvents, setAllEvents] = useState(location.events)
  const [eventsOptions, setEventsOptions] = useState()
  const [selectedEvent, setSelectedEvent] = useState()

  // const allEvents = useRef(location.events)

  useEffect(() => {
    setAllEvents(location.events)
  }, [])

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

  return (
    <div>
      <div className="center">
        <button className="normalButton" onClick={goToIslandMap}>Back to Island Map</button>
      </div>
      <div>
        <h1>{location.name}</h1>
        <p>{location.description}</p>
        <br></br>
        {eventsOptions}
      </div>
    </div>
  )
};

export default EventList;