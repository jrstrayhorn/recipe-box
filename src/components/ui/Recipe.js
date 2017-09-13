const Recipe = ({ id, name, ingredients, onRemove=f=>f}) => {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">{name}</h3>
                <button onClick={onRemove}
                    className="btn btn-danger pull-right">
                    <span className="glyphicon glyphicon-remove"
                            aria-hidden="true">
                            </span>
                </button>
            </div>
            <div className="panel-body">
                <span>
                    <ul>
                        {ingredients.split(',').map((i, idx) =>
                            <li key={idx}>{i.trim()}</li>
                        )}
                    </ul>
                </span>
            </div>
        </div>
    )
}

export default Recipe