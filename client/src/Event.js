import React from "react";
import OptionSelect from "./OptionSelect";

function Event({ event, onOptionSelect, character }) {

  let description = event.description.split(';')
  console.log({description})

  // console.log({ event.options })
  let options = event.options.map((option) => <OptionSelect character={character} key={option.id} option={option} onOptionSelect={onOptionSelect} />)
  
  return (
    <div className="center">
      <div>
        <h2>{event.name}</h2>
        {/* <p>{event.description}</p> */}
        <p>{description[0]}<br></br>{description[1]}</p>
        {options}
      </div>
    </div>
  )
};

export default Event;