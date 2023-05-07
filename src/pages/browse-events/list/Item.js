import styles from "./item.module.css";
const Item = (props) => {
  return (
    <div className={styles["item"]}>
      <div className={styles["item--info"]}>
        <div  id="item--title" className={styles[" item--textdecoration"]}> {props.title}</div>
        <div id="item--date"   className={styles["item--textdecoration"]}> {props.time} </div>
        <div id="item--location" className={styles["item--textdecoration"]}>{props.location}</div>
        <div id= "item--price" className={styles["item--textdecoration"]}>{props.price}</div>

        <div className={styles["item--stats"]}>
        <div id ="item--venue" className={styles["item--textdecoration"]}>{props.hosted_by}</div>
        <div id="item--followers" className={styles["item--textdecoration"]}>{props.followers}</div>
        </div>


      </div>

      <div className={styles["item--imgDiv"]}>
        <img className={styles["item--image"]} alt="aa" src={props.image}/>
        <div className={styles["item--likeButton"]}> </div>
      </div>
    </div>
  );
};

export default Item;
