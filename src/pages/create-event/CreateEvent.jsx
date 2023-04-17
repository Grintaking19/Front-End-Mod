import styles from "./CreateEvent.module.css";
import { useState } from "react";
import DateAndTime from "./date-and-time/DateAndTime";
import BasicInfo from "./basic-info/BasicInfo";
import Location from "./location/Location";
import Divider from "./UI/Divider";
import Footer from "./UI/Footer";

import axios from "axios";

const postRequest = async (bodyFormData) => {
  let url = "https://www.hebtus.me/api/v1/events";
  let data = bodyFormData;
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzQ0NWU4YWJiZTliNmY4MTcyZjQyMyIsImlhdCI6MTY4MTUwNjA2NywiZXhwIjoxNjg5MjgyMDY3fQ.7D9Hpv9xfXb2baxmi55y5ZQl9AoXZTPSXLSDHH_Gw6k",
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
    if (basicInfo.Title != "" && errorFlag == false && basicInfo.Category != "") {
      let bodyFormData = new FormData();
      console.log(startDate);
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
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzQ0NWU4YWJiZTliNmY4MTcyZjQyMyIsImlhdCI6MTY4MTUyNDg4NCwiZXhwIjoxNjg5MzAwODg0fQ.d6mWcY4iubrso4YAx69_hhio72sTAux7gxasuKdpCh0"
      );

      postRequest(bodyFormData);
    }
  };

  const onDiscardHandler = () => {};

  return (
    <div className={styles["container"]}>
      <BasicInfo onChange={BasicInfoChangeHandler}></BasicInfo>
      <Divider />
      <Location onChange={LocationChangeHandler}></Location>
      <Divider />
      <DateAndTime onChange={DateAndTimeChangeHandler}></DateAndTime>
      <Footer onSave={onSaveHandler} onDiscard={onDiscardHandler} />
    </div>
  );
};

export default CreateEvent;
