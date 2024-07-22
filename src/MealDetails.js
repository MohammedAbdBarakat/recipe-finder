import Swal from "sweetalert2";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

const MealDetails = ({recipes , userID }) => {
    const [existed , setExisted] = useState(false);
    const {data : user } = useFetch(`http://localhost:8888/user/${userID}`);

    useEffect(() => {
        if (user){
            user.savedMeals.map((meal) => {
                recipes.map((recipe) => {
                    if (meal.mealName === recipe.strMeal) {
                        console.log("meal.mealName  "+meal.mealName)
                        console.log("recipes.strMeal  "+recipe.strMeal)
                        setExisted(true);
                    }
                })
            })
        }
    },[recipes])

    const handleSaveButton = (e) => {
        //check if the recipe already saved:
        user.savedMeals.map((meal) => {
            recipes.map((recipe) => {
                if (meal.mealName === recipe.strMeal) {
                    setExisted(true);
                }
            })
        })
        if (!existed){
            recipes.map((recipe) => {
                user.savedMeals.push({mealId:recipe.idMeal,
                    mealName:recipe.strMeal,
                    mealImg:recipe.strMealThumb });
            })
    
            fetch(`http://localhost:8888/user/${userID}` , {
                method:"PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })
            .then((data) => {
                console.log("data "+data);
            })
    
            Swal.fire({
                icon: "success",
                title: "Saved!",
                text: "Recipe is saved!!\n check the saved recipes in Saved tab",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Not Saved!",
                text: "The recipe already saved",
            });
        }
    }

    return ( 
        <div className="meal-details">
            {recipes.map((recipe) => (
                <div key={recipe.idMeal}>  
                    <img className="full-details-img" src={recipe.strMealThumb} alt="dish"></img>
                    <div className="meal-details-container">
                        <h1 className="meal-name">{ recipe.strMeal }</h1>
                        <div className="save-meal-button">
                            <p>Did you like this recipe?, Save it now</p>
                            <button onClick={handleSaveButton}>Save</button>
                        </div>
                        <h2>Area : { recipe.strArea }</h2>
                        <div className="instructions">
                            <p> <span> Instructions : </span> { recipe.strInstructions }</p>
                            <p>
                                click on 
                                <span> </span>
                                <a href={recipe.strYoutube} target="_blank" > this link </a>
                                <span> </span>
                                to watch a video of how to make this recipe
                            </p>
                        </div>
                        <div className="instruction-measure-container">
                            <ol> <span>ingredients : </span>
                                <li>{ recipe.strIngredient1 }</li>
                                <li>{ recipe.strIngredient2 }</li>
                                <li>{ recipe.strIngredient3 }</li>
                                <li>{ recipe.strIngredient4 }</li>
                                <li>{ recipe.strIngredient5 }</li>
                                <li>{ recipe.strIngredient6 }</li>
                                <li>{ recipe.strIngredient7 }</li>
                                <li>{ recipe.strIngredient8 }</li>
                                <li>{ recipe.strIngredient9 }</li>
                                <li>{ recipe.strIngredient10 }</li>
                                <li>{ recipe.strIngredient11 }</li>
                                <li>{ recipe.strIngredient12 }</li>
                                <li>{ recipe.strIngredient13 }</li>
                                <li>{ recipe.strIngredient14 }</li>
                                <li>{ recipe.strIngredient15 }</li>
                                <li>{ recipe.strIngredient16 }</li>
                                <li>{ recipe.strIngredient17 }</li>
                                <li>{ recipe.strIngredient18 }</li>
                                <li>{ recipe.strIngredient19 }</li>
                                {(recipe.strIngredient20!==null ||recipe.strIngredient20 !=="" )&&  <li>{ recipe.strIngredient20 }</li>}
                            </ol>
                            <ol> <span> measures : </span> 
                                <li>{ recipe.strMeasure1 }</li>
                                <li>{ recipe.strMeasure2 }</li>
                                <li>{ recipe.strMeasure3 }</li>
                                <li>{ recipe.strMeasure4 }</li>
                                <li>{ recipe.strMeasure5 }</li>
                                <li>{ recipe.strMeasure6 }</li>
                                <li>{ recipe.strMeasure7 }</li>
                                <li>{ recipe.strMeasure8 }</li>
                                <li>{ recipe.strMeasure9 }</li>
                                <li>{ recipe.strMeasure10 }</li>
                                <li>{ recipe.strMeasure11 }</li>
                                <li>{ recipe.strMeasure12 }</li>
                                <li>{ recipe.strMeasure13 }</li>
                                <li>{ recipe.strMeasure14 }</li>
                                <li>{ recipe.strMeasure15 }</li>
                                <li>{ recipe.strMeasure16 }</li>
                                <li>{ recipe.strMeasure17 }</li>
                                <li>{ recipe.strMeasure18 }</li>
                                <li>{ recipe.strMeasure19 }</li>
                                <li>{ recipe.strMeasure20 }</li>
                            </ol>
                        </div>
                    </div>  
                </div>
            ))}
        </div>
    );
}

export default MealDetails;