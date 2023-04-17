import styles from "./TableStatus.module.css"

const TableStatus = (props) => {
  return (
    <div className={styles["info-status"]} id={`info-status-${props.id}`}>
      <div className={styles["info-status-sign"]} id={`info-status-sign-${props.id}`}> </div>
      <div className={styles["info-status-text"]} id={`info-status-text-${props.id}`}> On Sale </div>
    </div>
  );
};

export default TableStatus;
