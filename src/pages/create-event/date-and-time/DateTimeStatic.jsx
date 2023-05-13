import styles from "./DateTime.module.css";
import Panel from "../../../layouts/UI/Panel";
import { DateandTimeIcon } from "../../../layouts/UI/SvgImages";
import HorizontalFlex from "../../../layouts/UI/HorizontalFlex";
import PanelChanger from "../../../layouts/UI/PanelChanger";
import CheckboxField from "../fields/CheckboxField";
import DatalistField from "../fields/DatalistField";
import LabeledDropdown from "../fields/LabeledDropdown";
import BasicDatePicker from "../fields/BasicDatePicker";
import { useState, useEffect } from "react";
import { TimeSlots, Languages, TimeZones } from  "../Data";

export const PM_24hoursConvert = (time) => {
  let hours = time.slice(0, 2);
  if (hours[1] == ":") hours = hours[0];
  let PM_AM = time.slice(-2, time.length);
  if (PM_AM == "PM" && hours != 12) {
    hours = parseInt(hours) + 12;
  } else if (PM_AM == "AM" && hours == 12) {
    hours = "00";
  } else if (PM_AM == "AM") {
    if (hours.length == 1) hours = "0" + hours;
  }

  let minutes = time.slice(time.indexOf(":") + 1);
  minutes = minutes.slice(0, 2);

  return [hours, minutes];
};

const DateTimeStatic = (props) => {

  return (
    <Panel
      image={DateandTimeIcon}
      title="Date and Time"
      description="Tell event-goers when your event starts and ends so they can make plans to attend."
      style={{ width: props.width }}

    >
      <PanelChanger className="panel-changer-clicked" id="single-event-panel">
        Single Event
      </PanelChanger>
      <p>Single event happens once and can last multiple days.</p>

      <HorizontalFlex width="100%" id="start-date-time-flex">
        <BasicDatePicker
          title="Start Date *"
          width="100%"
          required={1}

          value={props.value.startDate}
          id="start-date"
          disabled={props.disable}

        />
        <DatalistField
          options={TimeSlots}
          title="Start Time"
          id="start-time"
          defaultValue={(new Date(props.value.startDate)).getUTCHours()}
          disabled={props.disable}

        />
  
      </HorizontalFlex>

      <HorizontalFlex width="100%" id="end-date-time-flex">
        <BasicDatePicker
          title="End Date *"
          width="100%"
          id="end-date"
          value={props.value.endDate}
          disabled={props.disable}

        />
        <DatalistField
          options={TimeSlots}
          title="End Time"
          id="end-time"
          defaultValue={(new Date(props.value.endDate)).getUTCHours()}
          disabled={props.disable}

        />
      
      </HorizontalFlex>

      <br />
      <LabeledDropdown options={TimeZones} title="Time Zone" width="50%"
       id="time-zone"
       />
      <LabeledDropdown
        options={Languages}
        title="Event Page Language"
        width="50%"
        id="event-page-lang"
      />
    </Panel>
  );
};

export default DateTimeStatic;
