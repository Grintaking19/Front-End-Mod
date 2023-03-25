import "./SearchContainer.css";
import Searchbar from "./Searchbar";
import LocationSearchbar from "./LocationSearchbar";
import Divider from "../General/Divider";


function SearchContainer(){

    return (
    <div id = "SearchContainer" className="SearchContainer">
        <Searchbar></Searchbar>
        <LocationSearchbar></LocationSearchbar>
        <Divider></Divider>
        <br/>
    </div>
    )
    
}

export default SearchContainer;