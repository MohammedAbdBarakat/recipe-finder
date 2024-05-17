import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import MealDetails from "./MealDetails";
const MealDetailsList = ({userID}) => {
    const {id} = useParams();
    const {data : recipes , isPending , error} = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    
    return ( 
        <div className="cards">
            {error && <div>{ error }</div>}
            {isPending && <div class="loader">
                <li class="ball"></li>
                <li class="ball"></li>
                <li class="ball"></li>
                </div>
                }
            {recipes &&  <MealDetails recipes={recipes.meals} userID={userID} />}
        </div>
    );
}

export default MealDetailsList;