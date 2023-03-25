import "./Item.css";
const Item = (props) => {
  return (
    <div className="item">
      <div className="item--info">
        <div  id="item--title" className=" item--textdecoration"> {props.title}</div>
        <div id="item--date"   className="item--textdecoration"> {props.time} </div>
        <div id="item--location" className="item--textdecoration">{props.location}</div>
        <div id= "item--price" className="item--textdecoration">{props.price}</div>

        <div className="item--stats">
        <div id ="item--venue" className="item--textdecoration">{props.hosted_by}</div>
        <div id="item--followers" className="item--textdecoration">{props.followers}</div>
        </div>


      </div>

      <div className="item--imgDiv">
        <img className="item--image" alt="aa" src={props.image}/>
        <div className="item--likeButton"> </div>
      </div>
    </div>
  );
};

export default Item;
