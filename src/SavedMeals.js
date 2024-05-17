import { Link } from "react-router-dom/cjs/react-router-dom";

const SavedMeals = ({meals}) => {

    if (!meals){
        return <div>User data not available.</div>;
    }


    return ( 
        <div className="recipe-list">
        {meals.map((recipe) => (
            <div className="card" key={recipe.mealId}>  
                <Link to={`/categories/details/${recipe.mealId}`}>
                    <img src={recipe.mealImg} alt="dish" style={{ width: "100%" }}></img>
                    <div className="dishContainer">
                        <h3>{ recipe.mealName }</h3>
                    </div>
                </Link>    
            </div>
        ))}
    </div>
    );
}

export default SavedMeals;