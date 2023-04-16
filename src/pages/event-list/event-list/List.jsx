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
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzQ0NWU4YWJiZTliNmY4MTcyZjQyMyIsImlhdCI6MTY4MTUyNDg4NCwiZXhwIjoxNjg5MzAwODg0fQ.d6mWcY4iubrso4YAx69_hhio72sTAux7gxasuKdpCh0",
    },
  };
  try {
    response = await axios.get("https://www.hebtus.me/api/v1/creators/events?time=" + parmas ,config);

    return response.data.data.events;
  } catch (error) {}
}

const List = (props) => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUserData(props.listView);
      setEventList(result);
    };
    fetchData();
  },[props.listView]);
  
  const serachFiltered = eventList.filter(event => event.name.includes(props.searchInput))

  return (
    <div className={styles["event-list"]}>
      <table className={styles["event-list-table"]}>
        <tr className={styles["table-header"]}>
          <th style={{ paddingLeft: "1.25rem" }} width="50%">
            Event
          </th>
          <th width="20%">Sold</th>
          <th width="15%">Growth</th>
          <th width="15%">Status</th>
        </tr>


        {serachFiltered.map((element) => {
          let monthName = new Date(element.startDate).toLocaleString(
            "default",
            { month: "short" }
          );
          let day = new Date(element.startDate).getDate();
          return (
            <tr key={element.id}>
              <td>
                <div className={styles["table-event-data"]}>
                  <TableDate month={monthName} day={day} />{" "}
                  <TableInfo
                    img={element.img_url}
                    title={element.name}
                    location={element.locationName}
                    date={new Date(element.startDate).toString().slice(0, 34)}
                  />
                </div>
              </td>
              <td>
                <TableProgress />
              </td>
              <td>$0.00</td>
              <td>
                <TableStatus />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default List;
