import "./sub-header.css";
const SubHeader = (props) => {
  return (
    <div>
      <p className="subheader-title">{props.title}</p>
      <p className="subheader-description">{props.description}</p>
    </div>
  );
};

export default SubHeader;
