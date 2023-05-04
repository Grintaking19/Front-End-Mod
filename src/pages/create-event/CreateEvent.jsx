import styles from "./CreateEvent.module.css";
import { useState } from "react";
import DateTime from "./date-and-time/DateTime";
import BasicInfo from "./basic-info/BasicInfo";
import Location from "./location/Location";
import Divider from "./UI/Divider";
import Footer from "./UI/Footer";
import Navbar from "../../layouts/navbar/NavBar";

import axios from "axios";

const postRequest = async (bodyFormData) => {
  let url = "https://www.hebtus.me/api/v1/events";
  let data = bodyFormData;
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        localStorage.getItem("user"),
        "ngrok-skip-browser-warning": "1",
      mode: "no-cors",
    },
  };

  let response = await axios.post(url, data, config);
  console.log(response);
};

const CreateEvent = (props) => {
  const [basicInfo, setBasicInfo] = useState({
    Title: "",
    Type: "",
    Category: "Music",
    SubCategory: "",
  });
  const [choosenTag, setChoosenTag] = useState([]);
  const [location, setLocation] = useState({});
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [errorFlag, setErrorFlag] = useState(false);

  const BasicInfoChangeHandler = (basicInfo, choosenTag) => {
    setBasicInfo(basicInfo);
    setLocation(choosenTag);
  };

  const LocationChangeHandler = (location) => {
    setLocation(location);
  };

  const DateAndTimeChangeHandler = (startDate, endDate, errorFlag) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setErrorFlag(errorFlag);
  };

  const onSaveHandler = () => {
    console.log(basicInfo.Title + "  ,,," + errorFlag + ",,," + basicInfo.Category);
    if (basicInfo.Title != "" && errorFlag == false && basicInfo.Category != "") {
      let bodyFormData = new FormData();

      bodyFormData.append("privacy", "false");
      bodyFormData.append("name", basicInfo.Title);
      bodyFormData.append("image", "");
      bodyFormData.append("startDate", startDate);
      bodyFormData.append("endDate", endDate);
      bodyFormData.append("location", "31.2107164, 30.0246686");
      bodyFormData.append("category", basicInfo.Category);
      bodyFormData.append("tags", choosenTag.toString());
      bodyFormData.append(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzliZGE0Yzg0NTU0MjU1ZTc3OWYwNCIsImlhdCI6MTY4MzA2NDM5OCwiZXhwIjoxNjkwODQwMzk4fQ.A8vFXxroxM7BWNCudQzXMUO7RjMYDPYfz2ZMRTSiShE"
      );

      postRequest(bodyFormData);
    }
  };

  const onDiscardHandler = () => {};

  return (
    <div className={styles["container"]}>
      {/* <Navbar /> */}
      <BasicInfo onChange={BasicInfoChangeHandler}></BasicInfo>
      <Divider />
      <Location onChange={LocationChangeHandler}></Location>
      <Divider />
      <Footer onSave={onSaveHandler} onDiscard={onDiscardHandler} />
      <DateTime onChange={DateAndTimeChangeHandler}></DateTime>

    </div>
  );
};

export default CreateEvent;
