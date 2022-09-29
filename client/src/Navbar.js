import React from "react";

function Navbar({ user, onLogin, onLogout }) {

  return (
    <div id="navbar">
      <h3 id="navbarText">{(user === null) ? "Please log in" : `Hello, ${user.username}`}</h3>
      <button id="navbarButton" onClick={(user === null) ? onLogin : onLogout} >{(user === null) ? "Login" : "Logout"}</button>
    </div>
  )
};

export default Navbar;