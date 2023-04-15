import "./horizontal-flex.css";

const HorizontalFlex = (props) => {
  return <div className="horizontal-flex" style={{width:props.width}}>

    {props.children}
  </div>
};

export default HorizontalFlex;