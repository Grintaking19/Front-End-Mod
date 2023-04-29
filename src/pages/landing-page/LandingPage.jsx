import {React,useState} from "react";
import Events from "./events/Events"
import NavBar from "../../layouts/navbar/NavBar"
import Categories from "./categories/Categories"
import SignedOutNavBar from "../../layouts/navbar/SignedOutNavBar";
import cover from "../../pages/landing-page/cover.png";

export default function LandingPage() {
    const [activeTab, setActiveTab] = useState('');
    const [location, setLocation] = useState('');
   

    return (
        <div>
            <NavBar/>
        <img id="cover" src={cover} width="1519.2px" />
     
            <Categories activeTab={activeTab} setActiveTab={setActiveTab} location={location} setLocation={setLocation}/>
            <Events activeTab={activeTab} location={location} />
        </div>
    )
}