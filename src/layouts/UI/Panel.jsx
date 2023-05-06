import styles from './Panel.module.css';

const Panel = (props) => {
    return (
        <div className={styles["panel"]} style={props.style}>
        <div className={styles["panel-image"]}>
            {props.image()}
        </div>
        <div className={styles["panel-body"]}>
            <h1 className={styles["panel-title"]}>{props.title}</h1>
            <p className={styles["panel-description"]}>{props.description}</p>
            {props.children}
        </div>
        </div>
    );

}

export default Panel;