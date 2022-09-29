import React from "react";

function OptionResult({ option, returnToLocation }) {  
 
  return (
    <div className="optionsResult">
      <div>
        <h2>{option.name}</h2>
        <p>{option.description}</p>
      </div>
      <br></br>
      <button className="normalButton" onClick={e => returnToLocation(option)}>Return to your Adventure</button>
    </div>
  )
};

export default OptionResult;