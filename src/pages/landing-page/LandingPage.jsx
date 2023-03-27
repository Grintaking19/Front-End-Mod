import React from "react";
import Events from "./events/Events" 
import NavBar from "../../layouts/navbar/NavBar"
import Categories from "./categories/Categories"

export default function LandingPage(){
    return(

        <div>
        {/* <header> */}
            <NavBar/>
            <Categories/>
        {/* </header> */}
        
        {/* <main> */}
            <Events/>
            {/* </main> */}

        </div>

    )
}