import React, { useEffect, useState } from "react";

function CharacterSidebar({ character, avatar, name, health, evil, strength, defense, luck }) {
  const [evilVisible, setEvilVisible] = useState(true)
  const [evilLevel, setEvilLevel] = useState()
  const [evilText, setEvilText] = useState()

  useEffect(() => {
    if (evil <= 25) {
      setEvilLevel("evilBar1")
      setEvilText("Evil")
    } else if (evil > 25 && evil < 51) {
      setEvilLevel("evilBar2")
      setEvilText("Evil-Mid")
    } else if (evil > 50 && evil < 76) {
      setEvilLevel("evilBar3")
      setEvilText("Good-Mid")
    } else if (evil >= 75) {
      setEvilLevel("evilBar4")
      setEvilText("Good")
    }
  }, [evil])

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
        <p id={evilVisible ? 'visibleEvil' : 'invisibleEvil'}>{evilText}: {evil}</p>
        <div id={((evil !== '') && evilVisible) ? evilLevel : "blankBar"} style={{width: `${evil}%`}}></div>
        {/* <p id={evilVisible ? 'visibleEvilLevel' : 'invisibleEvil'}>{evilText}</p> */}
      </div>
    </div>
  )
};

export default CharacterSidebar;





