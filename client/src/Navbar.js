import React from "react";

function Navbar({ user, onLogin, onLogout, handleHelp }) {

  return (
    <div id="navbar">
      <button id="helpButton" onClick={handleHelp}>Help page</button>
      <h3 id="navbarText">{(user === null) ? "Please log in" : `Hello, ${user.username}`}</h3>
      <button id="navbarButton" onClick={(user === null) ? onLogin : onLogout} >{(user === null) ? "Login" : "Logout"}</button>
    </div>
  )
};

export default Navbar;