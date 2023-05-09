import {React,useState} from "react";
import Events from "./events/Events"
import NavBar from "../../layouts/navbar/NavBar"
import Categories from "./categories/Categories"
import cover from "../../pages/landing-page/cover.png";

/**
    Renders the landing page component that encapsulates the navbar, a cover image, categories, and events cards.
    The landing page component is the entry point of the website 
    @component LandingPage
    @name LandingPage
    @returns {JSX.Element} The Landing Page
    @example
    return (<LandingPage/>)
    */


export default function LandingPage() {
    const [activeTab, setActiveTab] = useState('');
    const [location, setLocation] = useState('');
   
    return (
        <div>
            <NavBar/>
        <img id="cover" src={cover} width="100%" />
     
            <Categories activeTab={activeTab} setActiveTab={setActiveTab} location={location} setLocation={setLocation}/>
            <Events activeTab={activeTab} location={location} />
        </div>
    )
}