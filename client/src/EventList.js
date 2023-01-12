import React, { useEffect, useState } from "react";
// import Event from "./Event";

function EventList({ goToIslandMap, location, onEventSelect, character }) {
  const [allEvents, setAllEvents] = useState(location.events)
  const [eventsOptions, setEventsOptions] = useState()
  // const [locationMusic, setLocationMusic] = useState('')

  // const forestMusic = new Audio('https://audio.jukehost.co.uk/zkdzbDdAe5rkArhejjAsycueuONMzk4L')
  // const volcanoMusic = new Audio('https://audio.jukehost.co.uk/neGxVnheYUJCE1I8Y8Qtjuyo2XNWxoHX')


  // Set events and set music
  // useEffect(() => {
  //   setAllEvents(location.events)
  //   if (location.name === 'Volcano') {
  //     setLocationMusic(volcanoMusic)
  //   } else if (location.name === 'Forest') {
  //     setLocationMusic(forestMusic)
  //   }
  // }, [])


  // Play music
  // useEffect(() => {
  //   if (locationMusic === '') {
  //     console.log('No Music')
  //   } else if (!locationMusic.paused) {
  //     console.log('Already playing')
  //   } else {
  //     locationMusic.play()
  //   }
  // }, [locationMusic])


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
  // function backToMap() {
  //   locationMusic.pause()
  //   goToIslandMap()
  // }

// Break description into multiple paragraphs
  let paragraphs = location.description.split(';;')
  let allParagraphs = paragraphs.map(paragraph => (<p>{paragraph}</p>))

  return (
    <div>
      <div className="center">
        <button className="normalButton" onClick={goToIslandMap}>Back to Island Map</button>
      </div>
      <div>
        {/* <img className="eventImg" src="https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/locations/volcano-event-cropped.jpg"></img> */}
        <h1>{location.name}</h1>
        {allParagraphs}
        <br></br>
        {eventsOptions}
      </div>
    </div>
  )
};

export default EventList;