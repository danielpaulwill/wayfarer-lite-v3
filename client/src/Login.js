import React, { useState } from "react";

function Login({ handleLoginClick, handleSignupClick, errors }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleLoginClick(username, password)
  }

  return (
    <div id="welcome">
      <h3>Login</h3>
      <form>
        <input className="textInput" type="text" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
        <br></br>
        <br></br>
        <input className="textInput" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <br></br>
        <button className="normalButton" onClick={handleSubmit}>Log in</button>
      </form>
      <br></br>
      <br></br>
      <p className={(errors === '') ? 'errors2' : 'errors1'}>{errors}</p>
      <br></br>
      <br></br>
      <div>
        <p>Haven't played yet?</p>
        <button className="normalButton" onClick={handleSignupClick}>Start Game Here</button>
      </div>
    </div>
  )
};

export default Login;