import "./panel.css"

const Panel = (props) => {
    return (
        <div className="panel">
        <div className="panel-image">
            {props.image()}
        </div>
        <div className="panel-body">
            <h1 className="panel-title">{props.title}</h1>
            <p className="panel-description">{props.description}</p>
            {props.children}
        </div>
        </div>
    );

}

export default Panel;