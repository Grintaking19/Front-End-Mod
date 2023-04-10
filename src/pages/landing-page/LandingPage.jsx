import {React,useState} from "react";
import Events from "./events/Events"
import NavBar from "../../layouts/navbar/NavBar"
import Categories from "./categories/Categories"

export default function LandingPage() {
    const [activeTab, setActiveTab] = useState('all');
    function handleTabClick(tab) {
        setActiveTab(tab);
    }
    return (
        <div>
            <NavBar />
            <Categories activeTab={activeTab} onTabClick={handleTabClick} />
            <Events activeTab={activeTab} />
        </div>
    )
}