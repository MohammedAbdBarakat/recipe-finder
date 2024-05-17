import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Filter = () => {
    return ( 
        <div className="filter-options">
            <div className="filter-area">
                <Link to= {`/filter/by-area`}>
                    Filter By Area.
                </Link>
            </div>
            <div className="filter-mainIngredient">
                <Link to={`/filter/by-mainIng`} >
                    Filter By Main Ingredient.
                </Link>
            </div>
        </div>
    );
}

export default Filter;