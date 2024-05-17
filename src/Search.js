import { useState } from "react";
import { useHistory } from "react-router-dom";


const Search = () => {
    // const [searchValue, setSearchValue] = useState(null);
    const history = useHistory();

    const handleSearchButtonClick = () => {
        const searchedValue = document.getElementById("searchValue").value;
        // setSearchValue(searchedValue);
        history.push(`/search/${searchedValue}`)
    }


    return ( 
        <div>
            <div className="phrase-container">
                <h1>
                    Discover Endless Flavors!
                </h1>
            </div>
            <div className="search-container">
                <input type="text" id="searchValue" className="search-filed" required />
                <button className="search-button" onClick={ handleSearchButtonClick } >
                    Search
                </button>
            </div>
        </div>
    );
}

export default Search