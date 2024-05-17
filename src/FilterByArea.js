import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const FilterByArea = () => {
    const { data : areas } = useFetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");

    let [optionValue,setOptionValue] = useState(null);
    const history = useHistory();

    const handleChooseClick = () => {
        const selectedValue = document.getElementById("area-options").value;
        setOptionValue(selectedValue);
        history.push(`/filter/by-area/${selectedValue}`);
    }

    return ( 
        <div className="filter-area-options">
            <label htmlFor="area-options">Choose the desired area:</label>
            <select name="area-options" id="area-options">
                {areas && areas.meals && areas.meals.map((area) => (
                    <option key={ area.strArea } value={ area.strArea }>{ area.strArea }</option>
                ))}
            </select>
            <button onClick={ handleChooseClick } className="filter-byArea-chooseButton" >
                Choose
            </button>
        </div>
    );
}

export default FilterByArea;