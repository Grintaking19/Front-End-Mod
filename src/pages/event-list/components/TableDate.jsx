import styles from "./TableDate.module.css";

const TableDate = (props) => {
  return <div className={styles['table-date']} id={`table-date-${props.id}`}>

    <p className={styles['table-date-month']} id={`table-date-month-${props.id}`}> {props.month}</p>
    <p className={styles['table-date-day']} id={`table-date-day-${props.id}`}> {props.day}</p>

  </div>;
};

export default TableDate;