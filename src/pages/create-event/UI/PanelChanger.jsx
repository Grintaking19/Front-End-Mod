import "./panel-changer.css";

const PanelChanger = (props) => {
  return(
    <div className={"panel-changer " + props.className} onClick={props.onClick} >{props.children}</div>
  )

}

export default PanelChanger;
