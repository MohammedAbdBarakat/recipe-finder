import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom";

const MealsArea = () => {
    const {areaName} = useParams();
    const {data : recipes , error , isPending} = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);

    return ( 
        <div className="recipe-list">
            {error && <div>{ error }</div>}
            {isPending && <div class="loader">
                <li class="ball"></li>
                <li class="ball"></li>
                <li class="ball"></li>
                </div>
            }
            {recipes && recipes.meals && recipes.meals.map((recipe) => (
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

export default MealsArea;