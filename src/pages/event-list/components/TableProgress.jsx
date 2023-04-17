import styles from "./TableProgress.module.css";

const TableProgress = (props) => {

    return (
        <div className={styles['table-progress']} id={`table-progress-${props.id}`}>
            <p className={styles['table-progress-count']} id={`table-progress-count-${props.id}`}>10/1000</p>
            <div className={styles['table-progress-bar']} id={`table-progress-bar-${props.id}`}>
            <div className={styles['table-progress-bar-filled']} id={`table-progress-bar-filled-${props.id}`}/>
                 </div>
             </div>
    )
}

export default TableProgress;