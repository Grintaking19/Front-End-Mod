import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles['button']}
      style={props.style}
      type="button"
      onClick={props.onClick}
      id={props.id}
    >

      {props.children}
    </button>
  );
};

export default Button;
