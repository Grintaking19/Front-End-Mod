import styles from "./filters-control-panel.module.css";
import FilterHeading from "./FilterHeading";
import Divider from "../UI/Divider";
import FilterCheckBox from "./FilterCheckBox";
import FiltersChoices from "./FiltersChoices";
import React, { useState } from "react";

let FilterArray = [
  "Date",
  "Price",
  "Category",
  "Format",
  "Language",
  "Currnecy",
];

let DateArray = [
  "Any day",
  "Today",
  "Tommorow",
  "This weekend",
  "Pick a date",
  "This week",
  "Next week",
  "This month",
  "Next month",
];

let PriceArray = ["Any Price", "Free", "Paid"];

let CategoryArray = [
  "Any Category",
  "Business",
  "Food & Drink",
  "Health",
  "Music",
  "Art",
  "Auto, Boat & Air",
  "Chairty",
  "Community",
  "Family & Education",
  "Fashion",
  "Film & Media",
  "Hobbies",
  "Home & Lifestyle",
  "Performing & Visual Arts",
  "Government",
  "Spirituality",
  "School Activities",
  "Science & Tech",
  "Holiday",
  "Sports & Fitness",
  "Travel & Outdoor",
  "Other",
];

let FormatArray = [
  "Any format",
  "Class",
  "Conference",
  "Festival",
  "Party",
  "Appearance",
  "Attraction",
  "Convention",
  "Expo",
  "Gala",
  "Game",
  "Networking",
  "Performance",
  "Race",
  "Rally",
  "Retreat",
  "Screening",
  "Seminar",
  "Tournament",
  "Tour",
];

let LanguageArray = [
  "Any language",
  "English",
  "German",
  "Spanish",
  "French",
  "Italian",
  "Dutch",
  "Portuguese",
  "Swedish",
];

let CurrnecyArray = [
  "Any currency",
  "U.S. Dollar",
  "Canadian Dollar",
  "Euro",
  "British Pound",
  "Japanese Yen",
  "Australian Dollar",
  "New Zealand Dollar",
  "Swiss Franc",
  "Hong Kong Dollar",
  "Singapore Dollar",
  "Swedish Krona",
  "Danish Krone",
  "Polish Zloty",
  "Norwegian Krone",
  "Hungarian Forint",
  "Czech Koruna",
  "Mexican Pesos",
  "Israeli Shekels",
  "Argentinian Peso",
  "Brazilian Real",
  "Chilean Peso",
  "Malaysian Ringgits",
  "Philippine Pesos",
  "Taiwan New Dollars",
  "Thai baht",
];


const FiltersControlPanel = (props) => {
  const [FilterCondition, setFilterCondtion] = useState("");
  const [ChoosenFilter, setChoosenFilter] = useState("Filters");
  const [ChoosenFilterArray, setChoosenFilterArray] = useState([]);


  function filterHeadingHandler(e) {
    setFilterCondtion(1);
    setChoosenFilter(e.target.textContent);
    
    //This Lines is used to get tehe suitable array
    console.log(e.target);
    if (e.target.textContent == " Date")
      setChoosenFilterArray([...DateArray]);
    else if (e.target.textContent == " Price" )  
      setChoosenFilterArray([...PriceArray]);
    else if (e.target.textContent == " Category" )  
      setChoosenFilterArray([...CategoryArray]);
    else if (e.target.textContent == " Format" )  
      setChoosenFilterArray([...FormatArray]);
    else if (e.target.textContent == " Language" )  
      setChoosenFilterArray([...LanguageArray]);
    else if (e.target.textContent == " Currnecy" )  
      setChoosenFilterArray([...CurrnecyArray]);
  
    

  }


  return (
    <div className={styles["filtersDiv"]}>
      <h3 className={styles["filters--Header"]}>{ChoosenFilter}</h3>
      {FilterArray.map((filter) => {
        if (FilterCondition == 0)
          return (
            <FilterHeading onClick={filterHeadingHandler}>
              {filter}
            </FilterHeading>
          );
      })}

      {FilterCondition == 1 ? (<FiltersChoices array={ChoosenFilterArray}></FiltersChoices>): (<></>)}

      

    </div>
  );
};

export default FiltersControlPanel;
