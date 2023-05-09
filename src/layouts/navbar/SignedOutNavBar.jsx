import React from "react";
import styles from "./NavBar.module.css";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

/**

    A component that renders the navigation bar for the user who is not logged in
    @component
    @param {object} props - React props object
    @returns {JSX.Element} - Rendered component
    @example
    return (
    <SignedOutNavBar />
    )
    
    */

export default function SignedOutNavBar(props) {
  let navigate = useNavigate();
  return (
    <div id="signed-in-navbar-container">
      <nav id="signed-in-navbar" className={styles['signed-in-nav-bar']}>
        <a id="hebtus-logo" href="" className={styles['hebtus-logo-text']} onClick={() => { navigate("/") }}>
          <h3 className={styles['hebtus-logo-text']}>Hebtus</h3>
        </a>

        <div id="create-event-button" className={styles['nav-bar--button']}>
          <a href="" onClick={() => { navigate("/login") }}>
            <div>
              <CgMathPlus className={styles['nav-bar--button--icon']} />
            </div>
            Create an event
          </a>
        </div>

        <div id="navbar-dropdown-container" className={styles['nav-bar--user']}>
          <a id="navbar-dropdown" className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <AiOutlineUser className={styles['nav-bar--button--icon']} />
            <div className={`d-inline-block align-text-top ${styles['nav-bar--username']}`}>Log In / Sign Up</div>

          </a>
          <ul id="navbar-dropdown--list" className={`dropdown-menu dropdown-menu-end ${styles['drop-down-menu']}`}>
            <li id="login-link"><a className="dropdown-item text-center" href="" onClick={() => { navigate("/login") }}>Log In</a></li>
            <li id="signup-link"><a className="dropdown-item text-center" href="" onClick={() => { navigate("/signup") }}>Sign Up</a></li>
          </ul>
        </div>
      </nav>

      
    </div>
  );
}
