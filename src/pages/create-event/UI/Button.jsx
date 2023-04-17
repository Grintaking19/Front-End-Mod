import "./button.css";

const Button = (props) => {
  return (
    <button
      className="button"
      style={props.style}
      type="button"
      onClick={props.onClick}
    >

      {props.children}
    </button>
  );
};

export default Button;
