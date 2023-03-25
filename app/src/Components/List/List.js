import "./List.css";
import Item from "./Item";
import SearchContainer from "../General/SearchContainer";
const List = (props) => {
  return (
    <div className="__List">
      <SearchContainer></SearchContainer>
      {props.array.map((event) => (
        <Item
          key={event.id}
          title={event.title}
          time={event.time}
          location={event.location}
          price={event.price}
          hosted_by={event.maker}
          followers = {event.followers}
          image = {event.image}
        >
    
        </Item>
      ))}
    </div>
  );
};

export default List;
