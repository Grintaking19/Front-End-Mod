import styles from './CheckboxField.module.css';
import Checkbox from '@mui/material/Checkbox';

const CheckboxField = (props) => {

    return(
        
        <div className={styles["checkbox-conatiner"]} id={props.id}>

            <Checkbox
            size="medium"
            disableRipple= {true}
            style={{
                transform: "scale(1.2)",
            }}
            onChange={props.onChange}
            > </Checkbox>

            <div className={styles["checkbox-text-conatiner"]}>
                <p className={styles["checkbox-title"]}>{props.title}</p>
                <p className={styles["checkbox-description"]}>{props.description}</p>
            </div>
        </div>
        )

}


export default CheckboxField;
