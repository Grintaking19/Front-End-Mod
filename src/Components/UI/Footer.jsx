import "./footer.css";
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
    <div className="footer">
      <div className="buttons">
      <Button style={SaveStyle} onClick={props.onSave}> Save & Continue </Button>
        <Button>Discard</Button>
      </div>
    </div>
  );
};

export default Footer;
