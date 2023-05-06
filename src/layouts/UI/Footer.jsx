import styles from "./Footer.module.css";
import Button from "./Button";
const Footer = (props) => {
  let SaveStyle = {
    backgroundColor: "#d1410c",
    borderColor: "#d1410c",
    color: "white",
    fontSize: "0.9rem",
  };
  let DiscardStyle = {
    backgroundColor: "white",
    borderColor: "white",
    color: "white",
    fontSize: "0.9rem",
  };
  return (
    <div className={styles["footer"]}>
      <div className={styles["buttons"]}>
      <Button style={SaveStyle} onClick={props.onSave} id="save-button"> Save & Continue </Button>
  
      </div>
    </div>
  );
};

export default Footer;
