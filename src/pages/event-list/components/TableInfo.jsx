import styles from  "./table-info.module.css";

const TableInfo = (props) => {
  return (
    <div className={styles["table-info"]}>
      <img className={styles["table-info"]} src={props.img}/>
      <div className={styles["table-info-text"]}> 
      <p className={styles["table-info-title"]}> {props.title}</p>
      <p className={styles["table-info-location"]}> {props.location}</p>
      <p className={styles["table-info-date"]}> {props.date}</p>
      </div> 
    </div>
  );
};

export default TableInfo;
