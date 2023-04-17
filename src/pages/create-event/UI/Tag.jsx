import styles from "./Tag.module.css";

const Tag = (props) => {
  return (
    <div className={styles["tag"]}>
      <p className={styles["tag-label"]}> {props.children} </p>

      <div className={styles["cancel-icon"]} onClick={props.onCancel}>
        <svg id={props.id} className={styles["svg"]} height="20" width="20" >
          <path
            id={props.id}
            d="M13.4 12l3.5-3.5-1.4-1.4-3.5 3.5-3.5-3.5-1.4 1.4 3.5 3.5-3.5 3.5 1.4 1.4 3.5-3.5 3.5 3.5 1.4-1.4z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default Tag;
