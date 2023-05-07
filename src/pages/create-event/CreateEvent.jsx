import styles from "./CreateEvent.module.css";
import { useState } from "react";
import DateTime from "./date-and-time/DateTime";
import BasicInfo from "./basic-info/BasicInfo";
import Location from "./location/Location";
import Divider from "../../layouts/UI/Divider";
import Footer from "../../layouts/UI/Footer";
import Navbar from "../../layouts/navbar/NavBar";
import EventSidenav from "../../layouts/event-sidenav/EventSidenav";
import SignIn from "../sign-in/SignIn";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DateTimeStatic from "./date-and-time/DateTimeStatic";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link, Navigate } from "react-router-dom"


import axios from "axios";

const CreateEvent = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();


  if(localStorage.getItem("user") == ""){
    navigate("/login");
  }

  console.log(state);
  const [errorFlag, setErrorFlag] = useState(false);
  const [basicInfo, setBasicInfo] = useState({
    id: "",
    Title: "",
    Type: "",
    Category: "Music",
    SubCategory: "",
    choosenTag: [],
    location: "",
    startDate: "",
    endDate: "",
    image: "",
    description: "",
    privacy: "",
    gopublicDate: "",
    editOrCreate: "0", //0 Create, 1 Edit
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
      navigate("/event-details", { state: { ...basicInfo } });
    }
  };

  return (
    <div>
      {state == null ? (
        <div className={styles["navbar-div"]}>
          <Navbar />
          <span
            className={styles["back-to-eventlist"]}
            onClick={() => navigate("/events-list")}
          >
            &lt; Events{" "}
          </span>

          <div className={styles["container"]}>
            <BasicInfo onChange={BasicInfoChangeHandler} value={{}} width="46%"></BasicInfo>
            <Divider />
            <Location onChange={LocationChangeHandler} width="46%"></Location>
            <Divider />
            <DateTime onChange={DateAndTimeChangeHandler} width="46%"></DateTime>
            <Footer onSave={onSaveHandler} />
          </div>
        </div>
      ) : (
        <div className={styles["navbar-div"]}>
          <Navbar />
          <span
            className={styles["back-to-eventlist"]}
            onClick={() => navigate("/events-list")}
          >
            &lt; Events{" "}
          </span>

          <div style={{ display: "flex", flexDirection: "row" }}>
          <EventSidenav eventName={state.Title}  startDate={state.startDate} eventCurrentInfo={state}  />

            <div className={styles["container"]}>
              <BasicInfo
                value={state}
                onChange={BasicInfoChangeHandler}
                width="85%"
                disable="true"
              />
              <Divider />
              <Location onChange={LocationChangeHandler} width="85%"  disable="true"></Location>
              <Divider />
              <DateTimeStatic  value={state} width="85%"  disable="true" ></DateTimeStatic>
            </div>
          </div>
          <Footer onSave={onSaveHandler} />
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
