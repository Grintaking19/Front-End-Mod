import styles from "./button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles['button']}
      style={props.style}
      type="button"
      onClick={props.onClick}
    >

      {props.children}
    </button>
  );
};

export default Button;
