import React from "react";
import "./navbar.css"
import { CgMathPlus } from "react-icons/cg";
import {AiOutlineUser} from "react-icons/ai"
import cover from "../../pages/landing-page/cover.png"


export default function NavBar(){

    return(

        <div>
        <nav className="signed-in-nav-bar">
           <a href="#" className="hebtus-logo-text" >
               <h3 className="hebtus-logo-text">Hebtus</h3>
           </a>
           
           <div className="nav-bar--button">
            <a href="#">
                <div><CgMathPlus className="nav-bar--button--icon"/></div>
                Create an event
                </a>
           </div>
           
           {/* <div className="nav-bar--button">
            <a>
                <div><CgHeart className="nav-bar--button--icon"/></div>
                Likes
                </a>
           </div> */}

           {/* <div className="nav-bar--button">
            <a>
                <div><TfiTicket className="nav-bar--button--icon"/></div>
                Tickets
                </a>
           </div> */}

           <div className="nav-bar--user">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <AiOutlineUser className="nav-bar--button--icon "/>
                <div className=" nav-bar--username d-inline-block align-text-top">OmarAlSharif@gmail.com</div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item text-center"  href="#">Manage my events</a></li>
            {/* <li><a class="dropdown-item" href="#">Tickets</a></li> */}
            <li><a class="dropdown-item text-center"href="#">Update Password</a></li>
            <li><a class="dropdown-item text-center"href="#">Logout</a></li>
          </ul>

           </div>
           
          
           
        </nav>


        <div>
            <img src={cover} width="1519.2px"/>
        </div>
        

        </div>


    )

}