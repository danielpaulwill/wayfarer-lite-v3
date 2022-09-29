import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import SetupContainer from "./SetupContainer";
import GameContainer from "./GameContainer";

function MainContainer({ user, handleMapView, setErrors }) {
  const [character, setCharacter] = useState('');
  const [characterErrors, setCharacterErrors] = useState('')

  const blankAvatar = require("./assets/characters/blank.png")
  const archerAvatar = require("./assets/characters/archer.png")
  const mageAvatar = require("./assets/characters/mage.png")
  const warriorAvatar = require("./assets/characters/warrior.png")

  const [characterName, setCharacterName] = useState('')
  const [characterAvatar, setCharacterAvatar] = useState('')
  const [chosenProfession, setChosenProfession] = useState('')

  const [setupWorkaround, setSetupWorkaround] = useState('')

  const [health, setHealth] = useState('')
  const [evil, setEvil] = useState('')
  const [strength, setStrength] = useState('')
  const [defense, setDefense] = useState('')
  const [luck, setLuck] = useState('')

    // AUTO LOGIN
    useEffect(() => {
      fetch("/me").then((res) => {
        if (res.ok) {
        res.json().then((user) => {
          setCharacter(user.character)
          setCharacterName(user.character.name)
          setCharacterAvatar(user.character.avatar)
          setHealth(user.character.health)
          setEvil(user.character.evil)
          setStrength(user.character.strength)
          setDefense(user.character.defense)
          setLuck(user.character.luck)
        });
      } else {
        res.json().then((err) => setCharacterErrors(err.errors))
      }});
    }, []);

  useEffect(() => {
    if (chosenProfession === '') {
    } else if (chosenProfession === 'Firefighter') {
      setHealth(100)
      setEvil(20)
      setStrength(60)
      setDefense(30)
      setLuck(20)
    } else if (chosenProfession === 'Lawyer') {
      setHealth(100)
      setEvil(80)
      setStrength(40)
      setDefense(70)
      setLuck(20)
    } else if (chosenProfession === 'Engineer') {
      setHealth(100)
      setEvil(50)
      setStrength(50)
      setDefense(50)
      setLuck(50)
    }
  }, [chosenProfession])

  function handleNameChange(e) {
  setCharacterName(e.target.value.toUpperCase())
  }

  function handleAvatarClick(e) {
  setCharacterAvatar(e.target.src)
  }

  function handleProfessionChange(e) {
    setChosenProfession(e.target.value)
  }

  function handleCharacterConfirm(localName, localAvatar, localHealth, localEvil, localStrength, localDefense, localLuck) {  
    fetch('/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: localName,
        avatar: localAvatar,
        health: localHealth,
        evil: localEvil,
        strength: localStrength,
        defense: localDefense,
        luck: localLuck
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setCharacter(data));
          setSetupWorkaround("confirmBegin")
        } else {
          res.json().then((err) => setCharacterErrors(err.errors))
        }})
  }

  return (
    <div id="gameContainer">
      <CharacterSidebar character={character} avatar={characterAvatar} name={characterName} health={health} evil={evil} strength={strength} defense={defense} luck={luck} />
      <Routes>
        <Route path="setup" element={<SetupContainer user={user} handleNameChange={handleNameChange} handleAvatarClick={handleAvatarClick} handleProfessionChange={handleProfessionChange} handleCharacterConfirm={handleCharacterConfirm} handleMapView={handleMapView} characterAvatar={characterAvatar} setErrors={setErrors} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} /*health={health} evil={evil} strength={strength} defense={defense} luck={luck} setCharacterAttributes={handleCharacterAttributes}*/ setupWorkaround={setupWorkaround} characterErrors={characterErrors} />} />
        <Route path='play' element={<GameContainer character={character} /*characterName={characterName} characterAvatar={characterAvatar}*/ />} />
      </Routes>
      <ItemsSidebar />
    </div>
  )
};

export default MainContainer;