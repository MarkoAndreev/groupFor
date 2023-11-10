import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faPersonThroughWindow, faToilet, faPoo } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-form">
          <li>
            <p><FontAwesomeIcon icon={ faBars } size="2xl" style={{color : "#ABC4AB"}}/></p>
          </li>
          <li>
            <p>
            <Link to='/me' className="nav-fontawsome"><FontAwesomeIcon icon={ faUser } size="2xl" style={{color : "#ABC4AB"}}/></Link>
            </p>
          </li>
          <li>
            <p><a href='/' onClick={() => Auth.logout()}> 
            <FontAwesomeIcon icon={ faPersonThroughWindow } size="2xl" style={{color : "#ABC4AB"}}/>
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
            <Link to="/login"><FontAwesomeIcon icon={ faToilet } size="2xl" style={{color : "#ABC4AB"}}/></Link>
            </p>
          </li>
          <li>
            <p>
            <Link to="/login"><FontAwesomeIcon icon={ faPoo } size="2xl" style={{color : "#ABC4AB"}}/></Link>
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
