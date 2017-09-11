import Recipe from './Recipe'

const RecipeList = ({ recipes=[] }) => (
    <div className="row pad-row side-pad-row">
        {(recipes.length === 0) ?
            <p>No Recipes Listed. (Please add a recipe)</p> :
            <div>
            <p>Click on the recipe to edit.</p>
            {recipes.map(recipe =>
                <Recipe key={recipe.id}
                    {...recipe}
                />
            )}
            </div>
        }
    </div>
)

export default RecipeList