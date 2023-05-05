import styles from "./List.module.css";
import TableDate from "../components/TableDate";
import TableInfo from "../components/TableInfo";
import TableStatus from "../components/TableStatus";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../../../layouts/UI/Button";

//write get events
async function getUserData(parmas) {
  let response;
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
    },
  };
  try {
    response = await axios.get(
      "https://www.hebtus.me/api/v1/creators/events?time=" + parmas,
      config
    );

    return response.data.data.events;
  } catch (error) {}
}

//axios delete events
async function deleteEvent(parmas) {
  console.log(parmas + "has been deleted");
  let response;
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
    },
  };
  try {
    response = await axios.delete(
      "https://www.hebtus.me/api/v1/creators/events/" + parmas,
      config
    );

    return response.data.data.events;
  } catch (error) {}
}

const List = (props) => {
  const [eventList, setEventList] = useState([]);
  const [eventToDelete, setEventToDelete] = useState("");
  const serachFiltered = eventList.filter((event) =>
    event.name.includes(props.searchInput)
  );
  let style = { width: "100px", marginRight: "20px" };

  useEffect(() => {
    const callDeleteEvent = async () => {
      console.log(eventToDelete +"mmm");
      const result = await deleteEvent(eventToDelete);
      setEventToDelete("");
    };
    callDeleteEvent();

    const fetchData = async () => {
      const result = await getUserData(props.listView);
      setEventList(result);
    };
    fetchData();
  }, [props.listView, eventToDelete]);

  const deleteEventHandler = (e) => {
    setEventToDelete(e.target.id);
  };

  return (
    <div className={styles["event-list"]} id="event-list">
      <table className={styles["event-list-table"]} id="event-list-table">
        <tr className={styles["table-header"]} id="table-header">
          <th
            style={{ paddingLeft: "1.25rem" }}
            width="50%"
            id="table-header-event"
          >
            Event
          </th>
          <th width="15%" id="table-header-growth">
            Growth
          </th>
          <th width="10%" id="table-header-status">
            Status
          </th>
          <th width="20%" id="table-header-options">
            Options
          </th>
        </tr>

        {serachFiltered.map((element) => {
          element.id = element._id;
          let monthName = new Date(element.startDate).toLocaleString(
            "default",
            { month: "short" }
          );
          let day = new Date(element.startDate).getDate();
          return (
            <tr key={element.id} id={`event-${element.id}`}>
              <td id="table-event-data">
                <div
                  className={styles["table-event-data"]}
                  id={`event-${element.id}-data`}
                >
                  <TableDate month={monthName} day={day} id={element.id} />{" "}
                  <TableInfo
                    img={element.img_url}
                    title={element.name}
                    location={element.locationName}
                    date={new Date(element.startDate).toString().slice(0, 34)}
                    id={element.id}
                  />
                </div>
              </td>

              <td id={`event-${element.id}-growth`}>$0.00</td>
              <td>
                <TableStatus id={element.id} />
              </td>
              <td>
                <Button id={element.id} style={style}>
                  Edit
                </Button>
                <Button
                  id={element.id}
                  style={style}
                  onClick={deleteEventHandler}
                >
                  Del
                </Button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default List;
