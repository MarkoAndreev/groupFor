import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faPersonThroughWindow, faToilet, faPoo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faPersonThroughWindow, faToilet, faPoo } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-form">
        <ul className="nav-form">
          <li>
            <FontAwesomeIcon icon={ faBars } />
            <FontAwesomeIcon icon={ faBars } />
          </li>
          <li>
            <Link to='/me'><FontAwesomeIcon icon={ faUser } /></Link>
            <Link to='/me'><FontAwesomeIcon icon={ faUser } /></Link>
          </li>
          <li>
            <a href='/' onClick={() => Auth.logout()}> 
            <FontAwesomeIcon icon={ faPersonThroughWindow } />
            </a>
            <a href='/' onClick={() => Auth.logout()}> 
            <FontAwesomeIcon icon={ faPersonThroughWindow } />
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-form">
        <ul className="nav-form">
          <li>
            <Link to="/login"><FontAwesomeIcon icon={ faToilet } /></Link>
            <Link to="/login"><FontAwesomeIcon icon={ faToilet } /></Link>
          </li>
          <li>
            <Link to="/login"><FontAwesomeIcon icon={ faPoo } /></Link>
            <Link to="/login"><FontAwesomeIcon icon={ faPoo } /></Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="nav-form nav-fixed">
      <h1>
        <Link to="/">


        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}
export default Nav;
