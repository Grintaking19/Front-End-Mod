import styles from "./List.module.css";
import TableDate from "../components/TableDate";
import TableInfo from "../components/TableInfo";
import TableProgress from "../components/TableProgress";
import TableStatus from "../components/TableStatus";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

//write axios get request
async function getUserData(parmas) {

  let response;
  let config = {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzliZGE0Yzg0NTU0MjU1ZTc3OWYwNCIsImlhdCI6MTY4MzA2NDM5OCwiZXhwIjoxNjkwODQwMzk4fQ.A8vFXxroxM7BWNCudQzXMUO7RjMYDPYfz2ZMRTSiShE",
    },
  };
  try {
    response = await axios.get("https://www.hebtus.me/api/v1/creators/events?time=" + parmas ,config);

    return response.data.data.events;
  } catch (error) {}
}

const List = (props) => {
  const [eventList, setEventList] = useState([]);
  const serachFiltered = eventList.filter(event => event.name.includes(props.searchInput))


  useEffect(() => {
    const fetchData = async () => {
      const result = await getUserData(props.listView);
      setEventList(result);
    };
    fetchData();
  },[props.listView]);




  return (
    <div className={styles["event-list"]} id="event-list">
      <table className={styles["event-list-table"]} id="event-list-table">
        <tr className={styles["table-header"]} id="table-header">
          <th style={{ paddingLeft: "1.25rem" }} width="50%" id="table-header-event">
            Event
          </th>
          <th width="20%" id="table-header-sold">Sold</th>
          <th width="15%" id="table-header-growth">Growth</th>
          <th width="15%" id="table-header-status">Status</th>
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
                <div className={styles["table-event-data"]} id={`event-${element.id}-data`}>
                  <TableDate month={monthName} day={day} id={element.id}/>{" "}
                  <TableInfo
                    img={element.img_url}
                    title={element.name}
                    location={element.locationName}
                    date={new Date(element.startDate).toString().slice(0, 34)}
                    id={element.id}
                  />
                </div>
              </td>
              <td>
                <TableProgress id={element.id} />
              </td>
              <td id={`event-${element.id}-growth`}>$0.00</td>
              <td>
                <TableStatus id={element.id} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default List;
