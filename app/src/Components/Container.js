import "./Container.css";
import List from "./List/List";
import FiltersControlPanel from "./Filters/FiltersControlPanel";
import events from "./mock_events";
const Container = (props) => {

    return (
        <div className="__container">
            <FiltersControlPanel></FiltersControlPanel>
            <List array={events}></List>
            
        </div>
    )
};
export default Container;
