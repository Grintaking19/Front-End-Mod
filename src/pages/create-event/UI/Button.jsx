import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`button ${styles["button"]}`}
      style={props.style}
      type="button"
      onClick={props.onClick}
    >

      {props.children}
    </button>
  );
};

export default Button;
