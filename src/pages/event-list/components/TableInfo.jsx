import styles from  "./TableInfo.module.css";

const TableInfo = (props) => {
  return (
    <div className={styles["table-info"]} id={`table-info-${props.id}`}>
      <img className={styles["table-info-img"]} src={props.img} id={`table-info-img-${props.id}`} alt="event-img" />
      <div className={styles["table-info-text"]} id={`table-info-text-${props.id}`}>
      <p className={styles["table-info-title"]} id={`table-info-title-${props.id}`}> {props.title}</p>
      <p className={styles["table-info-location"]} id={`table-info-location-${props.id}`}> {props.location}</p>
      <p className={styles["table-info-date"]} id={`table-info-date-${props.id}`}> {props.date}</p>
      </div> 
    </div>
  );
};

export default TableInfo;
