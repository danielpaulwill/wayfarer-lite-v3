import React, {useEffect, useState} from "react";

function LandingPage({ handleClick }) {
  const [visibleButton, setVisibleButton] = useState(true)
  const [invertedButton, setInvertedButton] = useState(true)

  useEffect(() => {
    setTimeout(buttonAppear, 3000)
  }, [])

  useEffect(() => {
    setTimeout(buttonInvert, 500)
  }, [invertedButton])

  function buttonAppear() {
    setVisibleButton(visibleButton => !visibleButton)
  }

  function buttonInvert() {
    setInvertedButton(invertedButton => !invertedButton)
  }

  return (
    <div id="welcome">
      <h1>WELCOME TO</h1>
      <img id="logo" alt="8 bit logo" src="https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/pixelated-color-logo.png"></img>
      <div id={visibleButton ? 'noButton' : 'yesButton'}>
        <button id={invertedButton ? 'invertedButton' : 'welcomeButton'} onClick={handleClick}>Click me to begin!</button>
      </div>
    </div>
  )
};

export default LandingPage;