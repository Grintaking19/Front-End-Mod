import styles from "./PanelChanger.module.css";

const PanelChanger = (props) => {
  return(
    <div  className={`${styles["panel-changer"]} ${styles[props.className]}`} onClick={props.onClick} >{props.children}</div>
  )

}

export default PanelChanger;
