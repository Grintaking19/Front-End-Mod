import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div
      className={`button ${styles["button"]}`}
      style={props.style}
      type="button"
      onClick={props.onClick}
      id={props.id}
      disabled={props.disable}
    >

      {props.children}
    </div>
  );
};

export default Button;
