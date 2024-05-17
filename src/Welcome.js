import { BrowserRouter as Router , Route  } from "react-router-dom";
import Categories from "./Categories";
import CategoriesDetails from "./CategoriesDetails";
import Filter from "./Filter";
import FilterByArea from "./FilterByArea";
import FilterByMainIng from "./FilterByMainIng";
import Home from "./Home";
import MealDetailsList from "./MealDetailsList";
import MealsArea from "./MealsArea";
import MealsIngredients from "./MealsIngredient";
import NavBar from "./NavBar";
import Search from "./Search";
import SearchedRecipes from "./SearchedRecipes";
import Saved from "./Saved";
import GeneratedMeals from "./GeneratedMeals";



const Welcome = ({userID , setUserID} ) => {

    return ( 
        <>
            <Router>
                <div className="App">
                    <NavBar setUserID={setUserID} />
                    <div className="content">
                            <Route exact path="/filter/by-mainIng/:ingName">
                                <MealsIngredients />
                            </Route>
                            <Route exact path="/filter/by-area/:areaName">
                                <MealsArea />
                            </Route>
                            <Route exact path="/filter/by-area">
                                <FilterByArea />
                            </Route>
                            <Route exact path="/filter/by-mainIng">
                            < FilterByMainIng />
                            </Route>
                            <Route exact path="/filter">
                                <Filter />
                            </Route>
                            <Route exact path="/categories/details/:id">
                                <MealDetailsList userID={userID} />
                            </Route>
                            <Route exact path="/categories/:name">
                                <CategoriesDetails />
                            </Route>
                            <Route exact path="/categories">
                                <Categories />
                            </Route>
                            <Route exact path="/search/:searchedMeal" >
                                <SearchedRecipes />
                            </Route>
                            <Route exact path="/search">
                                <Search />
                            </Route>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/saved">
                                <Saved userID={userID} />
                            </Route>
                            <Route exact path="/genMeals/:Ing">
                                <GeneratedMeals />
                            </Route>
                </div>
            </div>
            </Router>
        </>
    );
}

export default Welcome;