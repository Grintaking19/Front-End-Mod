import styles from "./HorizontalFlex.module.css";

const HorizontalFlex = (props) => {
  return <div className={styles["horizontal-flex"]} style={{width:props.width}} id={props.id}>

    {props.children}
  </div>
};

export default HorizontalFlex;