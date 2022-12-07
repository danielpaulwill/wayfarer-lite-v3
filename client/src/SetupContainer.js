import React, { useEffect, useState } from "react";
import GameStart from "./GameStart";
import ChooseYourCharacter from "./ChooseYourCharacter";
import ConfirmGameBegin from "./ConfirmGameBegin";
import LoadingPage from "./LoadingPage";

function SetupContainer({ handleNameChange, handleAvatarClick, handleProfessionChange, handleCharacterConfirm, handleMapView, characterAvatar, archerAvatar, mageAvatar, warriorAvatar, setupWorkaround, characterErrors }) {
  
  const gameStart = <GameStart handleClick={handleStartClick} />
  const confirmGameBegin = <ConfirmGameBegin locationSeed={locationSeed} />
  const chooseYourCharacter = <ChooseYourCharacter handleNameChange={handleNameChange} handleAvatarClick={handleAvatarClick} handleProfessionChange={handleProfessionChange} handleCharacterConfirm={handleCharacterConfirm} archerAvatar={archerAvatar} mageAvatar={mageAvatar} warriorAvatar={warriorAvatar} characterErrors={characterErrors} />
  const loadingPage = <LoadingPage />

  const [currentPage, setCurrentPage] = useState(gameStart)


  function handleStartClick(e) {
    setCurrentPage(chooseYourCharacter)
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (setupWorkaround === "confirmBegin") {
      setCurrentPage(confirmGameBegin)
      window.scrollTo(0, 0);
    }
  }, [setupWorkaround])

  // function onCharacterConfirm() {
  // }

  function locationSeed() {
    setCurrentPage(loadingPage)
    // locations POST
    fetch('/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([]),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Locations POSTed")
        }})

    setTimeout(function(){ 
      // events POST
      fetch('/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([]),
      })
        .then((res) => {
          if (res.ok) {
            console.log("Events POSTed")
            
          }})

      }, 1000);


    setTimeout(function(){
      // options Post
      fetch('/options', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([]),
      })
        .then((res) => {
          if (res.ok) {
            console.log("Options POSTed")
          }})
    }, 2000);


    setTimeout(function() {
      handleMapView()
    }, 3000)

  }

  return (
    <div className="gameArea">
      {currentPage}
    </div>
  )
};

export default SetupContainer;