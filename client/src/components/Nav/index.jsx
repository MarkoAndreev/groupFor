import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faPersonThroughWindow, faToilet, faPoo } from "@fortawesome/free-solid-svg-icons";

function Nav() {

  const[overUser, setOverUser] = useState(false)
  const[overLogOut, setOverLogOut] = useState(false)
  const[overLogIn, setOverLogIn] = useState(false)
  const[overSignUp, setOverSignUp] = useState(false)

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-form">
          <li>
            <p><FontAwesomeIcon icon={ faBars } size="2xl" style={{color : "#ABC4AB"}}/></p>
          </li>
          <li>
            <p>
            <Link to='/me'
            onMouseOver={() => setOverUser(true)}
            onMouseLeave={() => setOverUser(false)}
            ><FontAwesomeIcon icon={ faUser } size="2xl" style={overUser ? {color: "#000000"} : {color : "#ABC4AB"}}/></Link>
            </p>
          </li>
          <li>
            <p><a href='/' onClick={() => Auth.logout()}
            onMouseOver={() => setOverLogOut(true)}
            onMouseLeave={() => setOverLogOut(false)}
            > 
            <FontAwesomeIcon icon={ faPersonThroughWindow } size="2xl" style={overLogOut ? {color: "#000000"} : {color: "#ABC4AB"}}/>
            </a>
            </p>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-form">
          <li>
            <p>
            <Link to="/login"
            onMouseOver={() => setOverLogIn(true)}
            onMouseLeave={() => setOverLogIn(false)}
            ><FontAwesomeIcon icon={ faToilet } size="2xl" style={overLogIn ? {color: "#000000"} : {color: "#ABC4AB"}}/></Link>
            </p>
          </li>
          <li>
            <p>
            <Link to="/login"
            onMouseOver={() => setOverSignUp(true)}
            onMouseLeave={() => setOverSignUp(false)}
            ><FontAwesomeIcon icon={ faPoo } size="2xl" style={overSignUp ? {color: "#000000"} : {color: "#ABC4AB"}}/></Link>
            </p>
          </li>
        </ul>
      );
    }
  }
  
  
  return (
    <header className="nav-form nav-fixed">
      <h1 className="hh-h1">
        <Link to="/" className="hh-h1">
          HH
        </Link>
      </h1>

      <nav className="main-nav">
        {showNavigation()}
      </nav>
    </header>
  );
}
export default Nav;
