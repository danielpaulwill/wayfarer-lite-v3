import React from "react";

function ChooseYourLocation({ onLocationSelect }) {

 
  return (
    <div id="chooseYourLocation">
      <button id="forestMap" value="Forest" onClick={onLocationSelect}>
        <h2 className="locationHeader">Forest</h2>
        <button id="forestButton" value="Forest" onClick={onLocationSelect}></button>
      </button>
      <button id="volcanoMap" value="Volcano" onClick={onLocationSelect}>
        <h2 className="locationHeader">Volcano</h2>
        <button id="volcanoButton" value="Volcano" onClick={onLocationSelect}></button>
      </button>
    </div>
  )
};

export default ChooseYourLocation;