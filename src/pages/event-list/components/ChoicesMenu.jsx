import styles from "./ChoicesMenu.module.css";

const ChoicesMenu = (props) => {
  return (
    <select className={styles['choices-menu']} onChange={props.onChange}>
      <option value="future">Upcoming Events</option>
      <option value="past">Past Events</option>
      <option value="all">All Events</option>
    </select>
  );
};

export default ChoicesMenu;
