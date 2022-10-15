import React, { useEffect, useState } from "react";

function ChooseYourCharacter({ handleAvatarClick, handleNameChange, handleProfessionChange, handleCharacterConfirm, setCurrentPage, chooseYourProfession, archerAvatar, mageAvatar, warriorAvatar, blankAvatar, setCharacter, characterErrors }) {
  const [fireSelect, setFireSelect] = useState(false)
  const [lawyerSelect, setLawyerSelect] = useState(false)
  const [engineerSelect, setEngineerSelect] = useState(false)

  const [localName, setLocalName] = useState('')
  const [localAvatar, setLocalAvatar] = useState(blankAvatar)
  const [localProfession, setLocalProfession] = useState('')

  const [localHealth, setLocalHealth] = useState('')
  const [localEvil, setLocalEvil] = useState('')
  const [localStrength, setLocalStrength] = useState('')
  const [localDefense, setLocalDefense] = useState('')
  const [localLuck, setLocalLuck] = useState('')

  useEffect(() => {
    if (localProfession === '') {
    } else if (localProfession === 'Firefighter') {
      setLocalHealth(100)
      setLocalEvil(20)
      setLocalStrength(60)
      setLocalDefense(30)
      setLocalLuck(20)
    } else if (localProfession === 'Lawyer') {
      setLocalHealth(100)
      setLocalEvil(80)
      setLocalStrength(40)
      setLocalDefense(70)
      setLocalLuck(20)
    } else if (localProfession === 'Engineer') {
      setLocalHealth(100)
      setLocalEvil(50)
      setLocalStrength(50)
      setLocalDefense(50)
      setLocalLuck(50)
    }
  }, [localProfession])


  function onNameChange(e) {
    setLocalName(e.target.value.toUpperCase())
    handleNameChange(e)
  }
  
  function onAvatarClick(e) {
    setLocalAvatar(e.target.src)
    handleAvatarClick(e)
  }

  function onCharacterConfirm() {
    handleCharacterConfirm(localName, localAvatar, localHealth, localEvil, localStrength, localDefense, localLuck)
  }

  function handleFirefighter(e) {
    setLocalProfession(e.target.value)
    handleProfessionChange(e)
    if (lawyerSelect === true) {
      setLawyerSelect(false)
    }
    if (engineerSelect === true) {
      setEngineerSelect(false)
}
    setFireSelect(fireSelect => !fireSelect)
  }

  function handleLawyer(e) {
    setLocalProfession(e.target.value)
    handleProfessionChange(e)
    if (fireSelect === true) {
      setFireSelect(false)
    }
    if (engineerSelect === true) {
      setEngineerSelect(false)
    }
    setLawyerSelect(lawyerSelect => !lawyerSelect)
  }

  function handleEngineer(e) {
    setLocalProfession(e.target.value)
    handleProfessionChange(e)
    if (fireSelect === true) {
      setFireSelect(false)
    }
    if (lawyerSelect === true) {
      setLawyerSelect(false)
    }
    setEngineerSelect(engineerSelect => !engineerSelect)
  }

  return (
      <div>
        <h2>Choose Your Character</h2>
        <h3>ENTER NAME BELOW</h3>
          <input
          type="text" 
          placeholder="Enter Name Here..." 
          className="textInput"
          onChange={e => onNameChange(e)} >
          </input>
            <br></br>
            <h3>CHOOSE YOUR AVATAR</h3>
          <div className="center">
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={e => onAvatarClick(e)} src={warriorAvatar} alt="*warrior"></img>
            </div>
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={e => onAvatarClick(e)} src={archerAvatar} alt="*archer"></img>
            </div>
            <div className="chooseYourAvatarContainer">
              <img className="chooseYourAvatarImg" onClick={e => onAvatarClick(e)} src={mageAvatar} alt="*mage"></img>
            </div>
          </div>
          <br></br>
          <h3>CHOOSE YOUR PROFESSION</h3>
          <div className="container">
            <button className={fireSelect ? 'selected' : 'checkmark'} value="Firefighter" onClick={handleFirefighter}>Firefighter</button>
            <button className={lawyerSelect ? 'selected' : 'checkmark'} value="Lawyer" onClick={handleLawyer}>Lawyer</button>
            <button className={engineerSelect ? 'selected' : 'checkmark'} value="Engineer" onClick={handleEngineer}>Engineer</button>
          </div>
          <br></br>
          <br></br>
          <div className="center">
            <h3  className={(characterErrors === '') ? 'errors2' : 'errors1'}>{characterErrors}</h3>
            <button className="normalButton" onClick={onCharacterConfirm}>Confirm your Character</button>
          </div>
      </div>
  )
};

export default ChooseYourCharacter;