import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";


const Home = () => {
    const [hidden_, setHidden] = useState(true);
    let [optionValue,setOptionValue] = useState([]);
    const history = useHistory();

    
    const { data : ingredients } = useFetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");

    const handleChooseClick = () => {
        const selectedValue = document.getElementById("area-options1").value;
        setOptionValue([...optionValue , selectedValue]);
    };

    const handleGenClick = () => {
        if (optionValue.length === 0){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "please choose at least two ingredients",
            });
        }
        else {
            history.push(`genMeals/${optionValue}`)
        }
    }

    const handleClick = () => {
        setHidden(!hidden_);
    };

    return (
        <>
        <div className="home">
            <div className="wrapper">
                <h1 className="phrase">
                Unleash<br />
                your inner chef<br />
                and explore<br /> limitless<br />
                recipes
                </h1>
            </div>
            <button className="start-button" onClick={handleClick}>
                GET STARTED
            </button>
            <div className={`main-search-div ${hidden_ ? "hidden" : "visible"}`}>
                <p className="home-label">what do you have in your fridge?!</p>
                <div className="filter-area-options1">
                    <label htmlFor="area-options1" className="home-label1">Choose the desired ingredient:</label> <br />
                    <select name="area-options1" id="area-options1" hidden >
                        {ingredients && ingredients.meals && ingredients.meals.map((ingredient) => (
                            <option key={ ingredient.strIngredient } value={ ingredient.strIngredient } > 
                            { ingredient.strIngredient }</option>
                        ))}
                    </select>
                    <p hidden>{ [optionValue+","] }</p>
                    <p style={{color:'red'}}> This feature is under development</p>
                    <button onClick={ handleChooseClick } className="filter-byArea-chooseButton1" hidden >
                        Choose
                    </button>
                    <button onClick={handleGenClick} hidden >Generate</button>
                </div>
            </div>
        </div>
        </>
    );
};
export default Home;