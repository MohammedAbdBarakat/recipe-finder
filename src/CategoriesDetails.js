import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import CategoriesDetailsList from "./CategoriesDetailsList";

const CategoriesDetails = () => {
    const {name} = useParams();
    const {data : recipes , error , isPending} = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
    return ( 
        <div className="cards">
            {error && <div>{ error }</div>}
            {isPending && <div class="loader">
                <li class="ball"></li>
                <li class="ball"></li>
                <li class="ball"></li>
                </div>
            }
            {recipes && <CategoriesDetailsList recipes={recipes.meals} /> }
        </div>
    );
}

export default CategoriesDetails;