import {React,useState} from "react";
import Events from "./events/Events"
import NavBar from "../../layouts/navbar/NavBar"
import Categories from "./categories/Categories"
import cover from "../../pages/landing-page/cover.png";

/**
    Renders the landing page component which is the entry point of the website 
    The component returns a JSX code that renders a navigation bar, an image, a Categories component, and an Events component.
    The useState hook is used to create two state variables: activeTab and location which are initially set to empty strings. 
    These variables are passed as props to the Categories and Events components along with two functions setActiveTab and setLocation that can be used to update their values.
    The NavBar component is rendered first, followed by an img tag that displays the cover image using the src attribute.
    The Categories and Events components are rendered with their respective props. The activeTab prop is used to highlight the active category tab in the Categories component, while the location prop is used to filter events by location in the Events component.
    Overall, this code defines a landing page component that displays a navigation bar, an image, and two components for displaying and filtering events by category and location.
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