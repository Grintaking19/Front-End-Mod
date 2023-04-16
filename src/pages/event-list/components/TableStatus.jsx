import styles from "./TableStatus.module.css"

const TableStatus = () => {
  return (
    <div className={styles["info-status"]}>
      <div className={styles["info-status-sign"]}> </div>
      <div className={styles["info-status-text"]}> On Sale </div>
    </div>
  );
};

export default TableStatus;
