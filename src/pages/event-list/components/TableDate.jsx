import styles from "./TableDate.module.css";

const TableDate = (props) => {
  return <div className={styles['table-date']}>

    <p className={styles['table-date-month']}> {props.month}</p>
    <p className={styles['table-date-day']}> {props.day}</p>

  </div>;
};

export default TableDate;