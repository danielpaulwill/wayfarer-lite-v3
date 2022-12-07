import React, {useState} from "react";

function Signup({ handleSignupClick, handleLoginClick, errors }) {
  const [signupUsername, setUsername] = useState('')
  const [signupPassword, setPassword] = useState('')

  function onSignupClick(e) {
    e.preventDefault()
    handleSignupClick(signupUsername, signupPassword)
  }

  return (
    <div id="welcome">
      <h3>Signup</h3>
      <form>
        <input className="textInput" type="text" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
        <br></br>
        <br></br>
        <input className="textInput" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="normalButton" onClick={onSignupClick}>Sign up</button>
      </form>
      <p className={(errors === '') ? 'errors2' : 'errors1'}>{errors}</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <p>Already signed up?</p>
        <button className="normalButton" onClick={handleLoginClick}>Go to Login</button>
      </div>
    </div>
  )
};

export default Signup;