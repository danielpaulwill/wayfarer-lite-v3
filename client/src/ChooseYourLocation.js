import React from "react";

function ChooseYourLocation({ onLocationSelect }) {
 
  return (
    <div id="chooseYourLocation">
      <button id="forestMap" value="Forest" onClick={onLocationSelect}>
        <h2 className="locationHeader">Forest</h2>
        <button className="locationButton" value="Forest" onClick={onLocationSelect}></button>
      </button>
      <button id="volcanoMap" value="Volcano" onClick={onLocationSelect}>
        <h2 className="locationHeader">Volcano</h2>
        <button className="locationButton" value="Volcano" onClick={onLocationSelect}></button>
        {/* <div className="locationButton"></div> */}
      </button>
      <button id="beachMap" value="Beach" onClick={onLocationSelect}>
        <h2 className="locationHeader">Beach</h2>
        <button className="locationButton" value="Beach" onClick={onLocationSelect}></button>
      </button>
      <button id="ruinsMap" value="Ruins" onClick={onLocationSelect}>
        <h2 className="locationHeader">Ruins</h2>
        <button className="locationButton" value="Ruins" onClick={onLocationSelect}></button>
      </button>
    </div>
  )
};

export default ChooseYourLocation;