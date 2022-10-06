import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CharacterSidebar from "./CharacterSidebar";
import ItemsSidebar from "./ItemsSidebar";
import SetupContainer from "./SetupContainer";
import GameContainer from "./GameContainer";

function MainContainer({ user, handleMapView, setErrors }) {
  const [character, setCharacter] = useState('');
  const [characterErrors, setCharacterErrors] = useState('')

  // const blankAvatar = require("./assets/characters/blank.png")
  // const archerAvatar = require("./assets/characters/archer.png")
  // const mageAvatar = require("./assets/characters/mage.png")
  // const warriorAvatar = require("./assets/characters/warrior.png")
  const blankAvatar = ("https://lh3.googleusercontent.com/J29GVVJ6aXI-LZ5u160UrM0MEgGfiUVeRqJeC0-28PTtAOKp1rHbyQWZUBkBam56zQwcwQakACxEEboZrI8erG1sY89BL42XJ01LcQ96x7dLMRSnoj2A-3vNNrDSExOU_7d89oTKP-R_Z7WS3ISDYNBIGnPew4NfT6LlSA8i6LBPTdZscIim13aux8wyPqOpymJ1qOu8bdyUqhnBZnYplTniVSYBm4do7RzQ8G-QYiXXrrdiQg1E8f8DYBE7Cd-scpTxfrX275se45tuB2J7Qd1YeX4_J3Zrc9f5rrz88R4Z5urAFIgCwrWMN-UvhoPDcufgWmk_GrDWaceaUB_k3KwH77cEO9sT5Z71dd6o-jQpNT9fLq_K-_q6oVUYwmavWUlekRKUuwyvhvvw3T7sgitqlwLP5Mo0PEP-PslZmugtXqzWZkmGSJ9ATMEv-OBtnFWgdpHo8dl5uPqRj9OO-7h6qSFcz8Koh2fn_c24MMUZNU28LxaxRBmmvz7uKffzkb2l6EJ17T26pXEbu9Bq4tko8rLCZKP-fymSHIj3vyl3-X_1wOPrK-KlwJTlX0MtGpAdAOQVRKqTlXGCYUvrkirir1y3fqi3Bf3rDA7MdOv5yGNT8tp0akP4bzgkPqTazk1HWi3HpcsoLZxDaXbvW8DOC8ew72PO2WTUOEgrcqkgLF1LwCsmWsv9vTBvUH__LMfASHEgalFoRooB98lyCgjpvhiwqnc9q2UYNZQMGGncu8kVPmPS1NrhCvgcxgF9sLkTNulypkaaHz5Pc5CWza7PvqvG034c08zz_R9FY-zyHi7X99Y4BlmMPHCpk_25MIDxPW9-aPB7MiThKUkOgOSp_wnHWGOeNtJrivEjQ8fOqm1TyRqij2f_J2rKWe9WjEOvs0dVcF0ucUja2NTkaa48GESwGwpfLWET1rzDSc8pJcYbXIOjyePLEJMXY28boIe0s6dV25BCkA=s180-no?authuser=0")
  const archerAvatar = ("https://lh3.googleusercontent.com/w9A1eRIn22E0XKjuQoHC0soqrG6Bezq4yaXdpvC71VAQN4LSGBw1PJKCGzucCaQE5srUpqZMu2NJrlT7ryMGK--_nupCWYK8kks-ny33VIXE4Xgv4IwRikvYAtIn1ZpcgwL2j56wZRCJihuEpIRpHWsWhjRxV6RnffrZaoLZEI5V7Dl0t4wBypMMetNsoyOoe_KEOpUcrTOY9a-9nFDtLOvi2JiMrqbHtqlI3mTnSAI0whH2yldKqSeTVme-SIhw4wpzKqfDOCy8C5LFXOThk3HW7K2bnYdibzioKaa98_Vu3XIfGCN_DYk42t3Cd2CanNVspAftvfsORkyMTvqY0EPXF1jM6SAlF8mRbO4LlO7b4hA0U5SMc1HThhD4pqpzW20gP_lcLKRR43zxCW-agbif4exmBkSFGHu8ZSskOuAZezVAPevdCYTVeV5ndYhb8Tdp4y9_VF43lDg3uO1X3AnrXo6UUrsyU_3PdEAh8-1sgqDnpBYdgBDDQc3-XQIsAgHzr8OmKSOrno0-OIHaJOoWs-2rZfra2EEfmvD-26YOwAmYukrKrhxN8yh5rcC75uunBNfd3pLuHeJeWeyuWqEAe3WOsaZJK5TLbZNmZtkawPOSQW43QGjF5VlSaTJB7OIvRCl6tQl0RYNdCRrVAy1oYbmjpfkGO1-rXrkuWyJItb9ZoF2B8yco7YPnYt9f9I-v_wgxDTTzq3CNnxuyEfxrmYz9dUNlg-pjw4DeoX9bTQeEpGxELg6qVul-osW_l1TCCiVZoyH8LCiUjQlENEunXJmAheD5C_44LSApN2F_pISxZRWjBE33kzEAm0jEs1iPNF3eUq9bMZ-29-lik64Tt7M8bMg57lw7wOJ9Y-QNDZuHDi5I9onw-KmwoA5zKgGA0qLokrCL8m3nTOk6BlNQXlJ783R2h3rabUpXBq4e2_uIGeqqVShRZstitzciPVLI7QMnJRCL9Q=s180-no?authuser=0")
  const mageAvatar = ("https://lh3.googleusercontent.com/nyMZRORJtODDYYQdq4yIh3EOfszXaKTk9KJkZNUMEFBpIU-RYE4wvPYas0XaWb_ZZZdVAcsOf2JNHWMueTrEFnzGzjdx3IG_vI_yY4LCudtFclVD2KldQvJ96dvsunon-hYafQyVwmOhTKnWAsN9088r2VbS57at3BwTszSgz1cFVcYghI5jMJd1Gx9tpaX4oD1V2tNS1znwwBMs20swl-C-jOuyuiH2vpxcId4caDWsEsiTGiiK6Ive2OKMQrWlT-687PN4A0DmfD-_fXnl_nVyF8hy3-KcYl6osod0gGiumeSnYUj_AUWD8Do8Hesz01JsMjgYGZoScWuXPI3OnWhUVJ4zS3WRfRMjwCFV79aZ4eIsRwc1DdD48AC925ke9aCGzrOBoVg4nTIpN0EPM1P-Za3TTEkDMnoWfAxRXy9YxOuCLHhJ8hKKViygZ-URzebcFWFtSr7qVJtxUk09_a49QYDuCo8TbIk2shaKSY0pws34QvFKlFVJjeCmN0E_rsN-RKJwtHWK1oes1_ZpLtX4QLtWN9t3qLVLCYmkWYjmTISoOovHG1b5ULNYFRjLjShLmqpe9bNabQfSCerNpEsmY2E8soRSnrv_KQ_RP_KsTnbeG6x-CvvZ9J9olk-VnY6ixFajOVF9jZiyOtv4zMihE78QiTz1fbqJi_k9G2LISe2r7_nqFBVXqwN6SK0bPiEo4_UKPTKrbhp6qaeiA9zKnR6gC09Ujcfwr13smXmAVKgJCCanFP6ywDWbDb3fCb-_HNEcilKNt_dr-zFgG112_Dik6RMSAz2I_mSmfbyJ21mxUpHZ7ENVB3qwQTjs98crGgISpJ-coev1PrQpbS2pEgFxVWhmMJAzjzWOEepMlDOCsFRZbktWP99BbUZAPHGlsVO2l34t6FT7Z9oTCBmbNTE9Z58SEenVRg1ocxE7UUdGaXHN2oQ5QgLjPuEXLMP_9jl9hvVlCA=s180-no?authuser=0")
  const warriorAvatar = ("https://lh3.googleusercontent.com/woaHulVQm2cFxOqK2z1jaCo8ZxvHRdGRPCLbSy1D-eYJYfVuPbCtvM8IYW3mysEmuVic8DImnHjg_eXLpFvlCL2PFFbrmL_z9Tb9ybRGDcUoJRu1CDgieO5BepSNSuTox6gaetn-h9q3Fu_wkS9x7EGxqS6ZZhOjYGUa-xGa6IZV9_el_alJLSlyu8FMA5E10TIgNTf6TX8_WqmFSV-XS8Du1_UAK2cv95GSikFXdBR1JbYWscnOGCM6pR0uzYugtNPLixjSBJlYMkUzWuNa_188gSnUGvneaGH9Y1_HXIJdqx0lAxqoUYWaEvV6fkuegpixUfPvi0l01LjF1cx2hTe_pgX1T6Dfe9BBQkLpjjdT8qSZAS1KOVfvR6xhmLuktSQYe_8EmJif9Xp1i_poJwIVxHnprpNxylmzQZxczwEO1Y06wD2HEgYQTVFQqjKDj4oidwGnMUj4-skUcKbA9ewZhCRx2aPWlp35L46lVoDHJODs-JI8GIBpm3Q_Y8GJaSBQb6KhJMJEJqpuvoHlR9opFWeHuB8twM6I8j4Mkc1AawFMfZq3WANFwteIJ8dgJIHhHBZclNChEW9ePze6aJTatr_g9NWh1MBoHWhWGONvMzc0UBE1GrTMANjFLvy7w9gbkd-41wXhhWlt0FRk3Kxcxig77UbOraGQnHDbWrAXr3G65KkPT_D-OS4LbMdzTT5CbJYmJHg7OU-DW6gx1_8BlgJHUHSFqk6aNOjOJfO6DtDLC_Ka8xbQFh86gahf8sH3bAupMGvrJZK8dU3gnURxHHjHCxbOf-xLrMMcAg5Z4Wgy0Z8dNOehAdHFANLYx3DEJlzv2Oty7Rgn6UgiX-ZV7BurPI7P9IlWk8Vwm9C2g7DxjOpdNG5is1xvR2Y8bx9MQ6ZDfKM81F5XeEAdXRDbpjfJ5xw_WOgixX6-4pFoMKybc_C0WmAKr8CTfwro9QkGqDjnzHP8qA=s180-no?authuser=0")

  const [characterName, setCharacterName] = useState('')
  const [characterAvatar, setCharacterAvatar] = useState(blankAvatar)
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
        res.json().then((data) => {
          if (data.character === undefined) {
            console.log("No character")
          } else {
            setCharacter(data.character)
            setCharacterName(data.character.name)
            setCharacterAvatar(data.character.avatar)
            setHealth(data.character.health)
            setEvil(data.character.evil)
            setStrength(data.character.strength)
            setDefense(data.character.defense)
            setLuck(data.character.luck)
          }
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