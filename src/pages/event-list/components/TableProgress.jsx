import styles from "./table-progress.module.css";

const TableProgress = () => {

    return (
        <div className={styles['table-progress']}>
            <p className={styles['table-progress-count']}> 10/1000</p>
            <div className={styles['table-progress-bar']}>
            <div className={styles['table-progress-bar-filled']}/>
                 </div>
             </div>
    )
}

export default TableProgress;