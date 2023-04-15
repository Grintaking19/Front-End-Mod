import { Fragment, useState } from "react";
import "./basic-date-picker.css";
import {CalendarIcon} from "../UI/SvgImages";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

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
  
    <div>
    <DatePicker sx={{width:"310px", border: dateError()}} onChange={onDateChange} 
    
    defaultValue={dayjs(new Date())}
    />
    <p className="date-picker-title"> {props.title}</p> 
    {(props.error) && <p className="date-picker-warning">End date must be after start date. </p>}
    </div>
  )
}

export default BasicDatePicker;
