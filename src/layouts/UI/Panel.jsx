import styles from './Panel.module.css';

const Panel = (props) => {
    return (
        <div className={styles["panel"]} style={props.style}>
            {props.image ?
                <div className={styles["panel-image"]}>
                    {props.image()}
                </div>
                : null}
            <div className={styles["panel-body"]}>
                {props.title ? <h1 className={styles["panel-title"]}>{props.title}</h1> : null}
                {props.description ? <p className={styles["panel-description"]}>{props.description}</p> : null}
                {props.children}
            </div>
        </div>
    );

}

export default Panel;