import "./checkbox-field.css"
import Checkbox from '@mui/material/Checkbox';

const CheckboxField = (props) => {

    return(
        
        <div className="checkbox-conatiner">

            <Checkbox
            size="medium"
            disableRipple= {true}
            style={{
                transform: "scale(1.2)",
            }}
            onChange={props.onChange}
            > </Checkbox>

            <div className="checkbox-text-conatiner">
                <p className="checkbox-title">{props.title}</p>
                <p className="checkbox-description">{props.description}</p>
            </div>
        </div>
        )

}


export default CheckboxField;
