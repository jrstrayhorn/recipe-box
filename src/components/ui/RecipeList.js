const RecipeList = ({ recipes=[] }) => (
    <div className="row pad-row side-pad-row">
        {(recipes.length === 0) ?
            <p>No Recipes Listed. (Please add a recipe)</p> :
            <div>
            <p>Click on the recipe to edit.</p>
            {recipes.map(recipe =>
                <h1>{recipe.name}</h1>
            )}
            </div>
        }
    </div>
)

export default RecipeList