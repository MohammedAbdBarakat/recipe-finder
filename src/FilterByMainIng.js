import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const FilterByMainIng = () => {
    const { data : ingredients } = useFetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");

    let [optionValue,setOptionValue] = useState(null);
    const history = useHistory();

    const handleChooseClick = () => {
        const selectedValue = document.getElementById("area-options").value;
        setOptionValue(selectedValue);
        history.push(`/filter/by-mainIng/${selectedValue}`);
    }

    return ( 
        <div className="filter-area-options">
        <label htmlFor="area-options">Choose the desired ingredient:</label>
        <select name="area-options" id="area-options">
            {ingredients && ingredients.meals && ingredients.meals.map((ingredient) => (
                <option key={ ingredient.strIngredient } value={ ingredient.strIngredient } > { ingredient.strIngredient }</option>
            ))}
        </select>
        <button onClick={ handleChooseClick } className="filter-byArea-chooseButton" >
            Choose
        </button>
    </div>
    );
}

export default FilterByMainIng;