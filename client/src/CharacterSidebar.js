import React, { useState } from "react";

function CharacterSidebar({ character, avatar, name, health, evil, strength, defense, luck }) {
  const [evilVisible, setEvilVisible] = useState(true)

  return (
    <div id="characterSidebar">
      <h2 style={name === "" ? {color: "black"} : {color: "white"}}>{name}</h2>
      <img src={avatar} alt="*characters avatar" referrerPolicy="no-referrer"></img>
      <div id="sidebarStats">
        <h3>Stats</h3>
        <p>Health: {health}</p>
        <div id={(health === '') ? "blankBar" : "healthBar"} style={{width: `${health}%`}}></div>
        <p>Strength: {strength}</p>
        <div id={(strength === '') ? "blankBar" : "strengthBar"} style={{width: `${strength}%`}}></div>
        <p>Defense: {defense}</p>
        <div id={(defense === '') ? "blankBar" : "defenseBar"} style={{width: `${defense}%`}}></div>
        <p>Luck: {luck}</p>
        <div id={(luck === '') ? "blankBar" : "luckBar"} style={{width: `${luck}%`}}></div>
        <p id={evilVisible ? 'visibleEvil' : 'invisibleEvil'} >Evil: {evil}</p>
        <div id={((evil !== '') && evilVisible) ? "luckBar" : "blankBar"} style={{width: `${luck}%`}}></div>
      </div>
    </div>
  )
};

export default CharacterSidebar;





