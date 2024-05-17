import useFetch from "./useFetch";
import CategoriesList from "./CategoriesList";

const Categories = () => {
    const {data : recipes , isPending , error} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    return ( 
        <div className="cards">
            {error && <div>{ error }</div>}
            {isPending && <div class="loader">
                <li class="ball"></li>
                <li class="ball"></li>
                <li class="ball"></li>
                </div>
            }
            {recipes && <CategoriesList recipes={recipes.categories} /> }
        </div>
    );
}

export default Categories;