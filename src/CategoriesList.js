import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CategoriesList = ({ recipes, title }) => {
    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div className="card" key={recipe.idCategory}>  
                    <Link to={`/categories/${recipe.strCategory}`}>
                        <img src={recipe.strCategoryThumb} alt="dish" style={{ width: "100%" }}></img>
                        <div className="dishContainer">
                            <h3>{ recipe.strCategory }</h3>
                        </div>
                    </Link>    
                </div>
            ))}
        </div>
        );
    }

export default CategoriesList;