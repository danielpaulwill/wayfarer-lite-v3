import React from "react";

function ChooseYourLocation({ onLocationSelect }) {

 
  return (
    <div id="chooseYourLocation">
      <div id="forestMap">
        <h3 className="locationHeader">Forest</h3>
        <button id="forestButton" value="Forest" onClick={onLocationSelect}></button>
      </div>
      <div id="volcanoMap">
        <h3>Volcano</h3>
        <button id="volcanoButton" value="Volcano" onClick={onLocationSelect}></button>
      </div>
    </div>
  )
};

export default ChooseYourLocation;