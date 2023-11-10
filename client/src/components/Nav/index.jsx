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
<<<<<<< HEAD
            <FontAwesomeIcon icon={ faBars } />
          </li>
          <li>
            <Link to='/me'><FontAwesomeIcon icon={ faUser } /></Link>
          </li>
          <li>
            <a href='/' onClick={() => Auth.logout()}> 
            <FontAwesomeIcon icon={ faPersonThroughWindow } />
            </a>
=======
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
>>>>>>> 3998596 (lots of css)
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-form">
          <li>
<<<<<<< HEAD
            <Link to="/login"><FontAwesomeIcon icon={ faToilet } /></Link>
          </li>
          <li>
            <Link to="/login"><FontAwesomeIcon icon={ faPoo } /></Link>
=======
            <p>
            <Link to="/login"><FontAwesomeIcon icon={ faToilet } size="2xl" style={{color : "#ABC4AB"}}/></Link>
            </p>
          </li>
          <li>
            <p>
            <Link to="/login"><FontAwesomeIcon icon={ faPoo } size="2xl" style={{color : "#ABC4AB"}}/></Link>
            </p>
>>>>>>> 3998596 (lots of css)
          </li>
        </ul>
      );
    }
  }
  
  return (
    <header className="nav-form nav-fixed">
<<<<<<< HEAD
      <h1>
        <Link to="/">
          
=======
      <h1 className="hh-h1">
        <Link to="/" className="hh-h1">
          HH
>>>>>>> 3998596 (lots of css)
        </Link>
      </h1>

      <nav className="main-nav">
        {showNavigation()}
      </nav>
    </header>
  );
}
export default Nav;
