import React from "react";

function ConfirmGameBegin({ locationSeed }) {
 
  return (
    <div>
      <h2>Are You Ready?</h2>
      {/* <p>You still aren't sure how you got here, or what this place even is.
        But there's something calming about this beach. Are you ready to begin exploring this place?</p> */}
        
      <p>You find yourself stranded on a mysterious island, surrounded by treacherous jungles and towering mountains. 
        The island is filled with ancient ruins and strange, exotic creatures.</p>
      <p>It is up to you to explore the island, uncover its secrets, and find a way to escape and return home. 
        Will you succeed and brave the unknown, or will you succumb to the dangers that lurk around every corner? 
        The choice is yours…</p>

  
        <div className="center">
            <button className="normalButton" onClick={locationSeed}>Begin Exploring</button>
        </div>
    </div>
  )
};

export default ConfirmGameBegin;