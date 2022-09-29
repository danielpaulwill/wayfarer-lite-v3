import React from "react";

function Event({ event, onOptionSelect }) {

  // console.log({ event.options })
  let options = event.options.map((option) => (<button key={option.id} className="normalButton" onClick={e => onOptionSelect(option)} >{option.name}</button>))
  
  return (
    <div className="center">
      <div>
        <h2>{event.name}</h2>
        <p>{event.description}</p>
        {options}
      </div>
    </div>
  )
};

export default Event;