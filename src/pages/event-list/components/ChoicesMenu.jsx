import styles from "./ChoicesMenu.module.css";

const ChoicesMenu = (props) => {
  return (
    <select className={styles['choices-menu']} onChange={props.onChange} id="choices-menu">
      <option value="future" id="choices-menu-upcoming">Upcoming Events</option>
      <option value="past" id="choices-menu-past">Past Events</option>
      <option value="all" id="choices-menu-all">All Events</option>
    </select>
  );
};

export default ChoicesMenu;
