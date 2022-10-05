import React from "react";

function ConfirmGameBegin({ locationSeed }) {
 
  return (
    <div>
      <h2>Are You Ready?</h2>
      <p>You still aren't sure how you got here, or what this place even is.
        But there's something calming about this beach. Are you ready to begin exploring this place?</p>
        
  
        <div className="center">
            <button className="normalButton" onClick={locationSeed}>Begin Exploring</button>
        </div>
    </div>
  )
};

export default ConfirmGameBegin;