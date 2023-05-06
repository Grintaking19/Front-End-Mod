import styles from "./CreateEvent.module.css";
import { useState } from "react";
import DateTime from "./date-and-time/DateTime";
import BasicInfo from "./basic-info/BasicInfo";
import Location from "./location/Location";
import Divider from "../../layouts/UI/Divider";
import Footer from "../../layouts/UI/Footer";
import Navbar from "../../layouts/navbar/NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateEvent = (props) => {
  const navigate = useNavigate();
  const [errorFlag, setErrorFlag] = useState(false);
  const [basicInfo, setBasicInfo] = useState({
    id:"",
    Title: "",
    Type: "",
    Category: "Music",
    SubCategory: "",
    choosenTag: [],
    location: "",
    startDate: "",
    endDate: "",
    image:"",
    description:"",
    privacy:"",
    gopublicDate:""
  });

  const BasicInfoChangeHandler = (basicInfoRecived, choosenTagRecived) => {
    setBasicInfo({
      ...basicInfo,
      Title: basicInfoRecived.Title,
      Type: basicInfoRecived.Type,
      Category: basicInfoRecived.Category,
      SubCategory: basicInfoRecived.SubCategory,
      choosenTag: [...choosenTagRecived],
    });
  };

  const LocationChangeHandler = (location) => {
    setBasicInfo({ ...basicInfo, location: location });
  };

  const DateAndTimeChangeHandler = (
    startDateRecived,
    endDateRecived,
    errorFlag
  ) => {
    setBasicInfo({
      ...basicInfo,
      startDate: startDateRecived,
      endDate: endDateRecived,
    });
    setErrorFlag(errorFlag);
  };

  const onSaveHandler = async () => {

    if (
      basicInfo.Title != "" &&
      errorFlag == false &&
      basicInfo.Category != ""
    ) {
      

      navigate("/event-details", { state: {...basicInfo} });
    }
    
  };

  return (
    <div className={styles["navbar-div"]}>
      <Navbar />
      <span
        className={styles["back-to-eventlist"]}
        onClick={() => navigate("/events-list")}
      >
        &lt; Events{" "}
      </span>

      <div className={styles["container"]}>
        <BasicInfo onChange={BasicInfoChangeHandler}></BasicInfo>
        <Divider />
        <Location onChange={LocationChangeHandler}></Location>
        <Divider />
        <DateTime onChange={DateAndTimeChangeHandler}></DateTime>
        <Footer onSave={onSaveHandler} />
      </div>
    </div>
  );
};

export default CreateEvent;
