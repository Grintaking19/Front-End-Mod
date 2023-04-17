import styles from "./BasicDatePicker.module.css";

import { Fragment, useState } from "react";
import {CalendarIcon} from "../UI/SvgImages";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


const BasicDatePicker = (props) => {

  const dateError = () => {
    if (props.error){
      return ({border: "1px solid #c5162e"})
    }
    else {
      return ({})
    }
  }
  const onDateChange = (date) => {
    props.onChange(date);
  }

  let value = new Date()+1;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

    <div>

    <DatePicker sx={{width:"310px", border: dateError()}} onChange={onDateChange} 
    defaultValue={dayjs(new Date())}
    />
    <p className={styles["date-picker-title"]}> {props.title}</p> 
    {(props.error) && <p className={styles["date-picker-warning"]}>End date must be after start date. </p>}
    </div>
    </LocalizationProvider>

  )
}

export default BasicDatePicker;
