import styles from "./list.module.css";
import Item from "./Item";
import SearchContainer from "../UI/SearchContainer";
import { useState } from "react";

const List = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const SearchInputHandler = (event) => {
    setSearchInput(event);
  };

  console.log(props.array);
  return (
    <div className={styles["__List"]}>
      <SearchContainer onChange={SearchInputHandler}></SearchContainer>
      {props.array.map((event) => (
      
        (event.name.toLowerCase().includes(searchInput.toLowerCase())?(
        <Item
          id={event._id}
          key={event._id}
          title={event.name}
          time={event.startDate}
          location={event.locationName}
          price={event.category}
          hosted_by={event.maker}
          followers={event.followers}
          image={event.img_url}
        ></Item>):null)
      ))}
    </div>
  );
};

export default List;
