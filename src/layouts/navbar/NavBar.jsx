import React from "react";
import styles from "./NavBar.module.css";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import cover from "../../pages/landing-page/cover.png";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  let navigate = useNavigate();
  return (
    <div id="signed-in-navbar-container">
      <nav id="signed-in-navbar" className={styles['signed-in-nav-bar']}>
        <a id="hebtus-logo" href="#" className={styles['hebtus-logo-text']} onClick={() => { navigate("/") }}>
          <h3 className={styles['hebtus-logo-text']}>Hebtus</h3>
        </a>

        <div id="create-event-button" className={styles['nav-bar--button']}>
          <a href="#" >
            <div>
              <CgMathPlus className={styles['nav-bar--button--icon']} />
            </div>
            Create an event
          </a>
        </div>

        <div id="navbar-dropdown-container" className={styles['nav-bar--user']}>
          <a id="navbar-dropdown" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <AiOutlineUser className={styles['nav-bar--button--icon']} />
            {/* <div className={styles['nav-bar--username d-inline-block align-text-top']}>OmarAlSharif@gmail.com</div> */}
            <div className={`d-inline-block align-text-top ${styles['nav-bar--username']}`}>OmarAlSharif@gmail.com</div>

          </a>
          <ul id="navbar-dropdown--list" className={`dropdown-menu dropdown-menu-end ${styles['drop-down-menu']}`}>
            <li id="manage-my-events-link"><a className="dropdown-item text-center" href="#">Manage my events</a></li>
            {/* <li><a className="dropdown-item" href="#">Tickets</a></li> */}
            <li id="update-password-link"><a className="dropdown-item text-center" href="#">Update Password</a></li>
            <li id="logout-link"><a className="dropdown-item text-center" href="#">Logout</a></li>
          </ul>
        </div>
      </nav>

      <div>
        <img id="cover" src={cover} width="1519.2px" />
      </div>
    </div>
  );
}
