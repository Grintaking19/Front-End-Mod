import styles from "./SubHeader.module.css";
const SubHeader = (props) => {
  return (
    <div>
      <p className={styles["subheader-title"]}>{props.title}</p>
      <p className={styles["subheader-description"]}>{props.description}</p>
    </div>
  );
};

export default SubHeader;
