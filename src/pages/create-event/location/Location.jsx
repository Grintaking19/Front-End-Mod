import styles from "./Location.module.css";
import Panel from "../UI/Panel";
import { LocationIcon } from "../UI/SvgImages";
import HorizontalFlex from "../UI/HorizontalFlex";
import PanelChanger from "../UI/PanelChanger";
import { useState } from "react";

const Location = () => {

  const [choosenPanel, setChoosenPanel] = useState(1);
  const panelChangeHandler = (index) => {
    setChoosenPanel(index)
    
  }
  return (
    <Panel
      image={LocationIcon}
      title="Location"
      description="Help people in the area discover your event and let attendees know where to show up."
    >
      <HorizontalFlex width="68%">
        <PanelChanger onClick={()=>panelChangeHandler(1)} className={(choosenPanel==1) && "panel-changer-clicked"}>Venue</PanelChanger>
        <PanelChanger onClick={()=>panelChangeHandler(2)}  className={(choosenPanel==2) && "panel-changer-clicked"}>Online Event</PanelChanger>
        <PanelChanger onClick={()=>panelChangeHandler(3)}  className={(choosenPanel==3) && "panel-changer-clicked"}>To be announced</PanelChanger>
      </HorizontalFlex>
      {(choosenPanel==1)}
      {(choosenPanel==2) && <p>Online events have unique event pages where you can add links to livestreams and more.</p>}
    </Panel>
  );
};

export default Location;
