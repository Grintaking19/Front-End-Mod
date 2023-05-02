import {React,useState} from "react";
import Events from "./events/Events"
import NavBar from "../../layouts/navbar/NavBar"
import Categories from "./categories/Categories"
import cover from "../../pages/landing-page/cover.png";

export default function LandingPage() {
    const [activeTab, setActiveTab] = useState('');
    const [location, setLocation] = useState('');
   

    return (
        <div>
            <NavBar/>
     
            <Categories activeTab={activeTab} setActiveTab={setActiveTab} location={location} setLocation={setLocation}/>
            <Events activeTab={activeTab} location={location} />
        </div>
    )
}