import { Link } from "react-router-dom/cjs/react-router-dom.min";
const CategoriesDetailsList = ({ recipes }) => {
    return ( 
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div className="card" key={recipe.idMeal}>  
                    <Link to={`/categories/details/${recipe.idMeal}`}>
                        <img src={recipe.strMealThumb} alt="dish" style={{ width: "100%" }}></img>
                        <div className="dishContainer">
                            <h3>{ recipe.strMeal }</h3>
                        </div>
                    </Link>    
                </div>
            ))}
        </div>
    );
}

export default CategoriesDetailsList;