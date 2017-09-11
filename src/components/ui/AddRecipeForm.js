import { PropTypes } from 'react'

const AddRecipeForm = ({onNewRecipe=f=>f}) => {
    
    // local variables for ref
    let _name, _ingredients
    const submit = e => {
        e.preventDefault()
        onNewRecipe(_name.value, _ingredients.value)
        _name.value = ''
        _ingredients.value = ''
        _name.focus()
    }
    
    return (
        <div className="row side-pad-row">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Recipe Name</label>
                    <input ref={input => _name = input}
                        type="text" 
                        className="form-control" 
                        placeholder="Recipe Name..." />
                </div>
                <div className="form-group">
                    <label>Ingredients</label>
                    <input ref={input => _ingredients = input}
                        type="text" 
                        className="form-control" 
                        placeholder="Ingredients (separate w/ commas)..." />
                </div>
                <button className="btn btn-success">
                    ADD
                </button>
                
            </form>
        </div>
    )
}

AddRecipeForm.propTypes = {
    onNewRecipe: PropTypes.func
}

export default AddRecipeForm