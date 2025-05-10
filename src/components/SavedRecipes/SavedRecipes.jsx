import React, { useEffect, useState } from 'react';
import './SavedRecipes.css'
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { RecipeContext } from '../Contexts/RecipeContext';
import { NavLink } from 'react-router-dom';

function SavedRecipes() {

    const { setTheFullRecipe } = useContext(RecipeContext)
    const [displaySavedRecipe, setDisplaySavedRecipe] = useState([]);

    useEffect(() => {
        const savedMeals = JSON.parse(localStorage.getItem('selectedMeals')) || [];
        setDisplaySavedRecipe(savedMeals);
    }, []);

    //to delete all recipes
    const deleteRecipes = () => {
        localStorage.removeItem('selectedMeals')
        setDisplaySavedRecipe([])
        toast("Deleted All Items!");
    }

    //to delete individual recipe
    const DeleteCurrentRecipe = (recipeID) => {
        const items = JSON.parse(localStorage.getItem('selectedMeals')) || [];
        const updatedItems = items.filter(item => item.idMeal !== recipeID);
        localStorage.setItem("selectedMeals", JSON.stringify(updatedItems));
        setDisplaySavedRecipe(updatedItems)
        toast("Deleted successfully!");
    }


    const getFullRecipe = (recipe) => {
        setTheFullRecipe(recipe)
    }

    return (
        <>

            <div className="SavedHeading">
                <h2> This are the Saved Recipes </h2>
                <button className="deleteAllBtn" onClick={deleteRecipes}>
                    Delete All
                </button>
            </div>

            <div className="savedElement">
                {displaySavedRecipe.length > 0 ? (displaySavedRecipe.map((recipe) => (
                    <div key={recipe.idMeal} className="cardBody savedCard" >
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="img" />
                        <div className="recipe-Save">
                            <h3 className="heading">{recipe.strMeal}</h3>
                            <i className="fa-solid fa-trash deleteBtn" onClick={() => DeleteCurrentRecipe(recipe.idMeal)}></i>
                        </div>
                        <h6 className="category"> Area : {recipe.strArea}</h6>
                        <h6 className="category"> Category : {recipe.strCategory}</h6>
                        <div className='videoLink-fullRecipeBtn'>
                            <a href={recipe.strYoutube} target='_blank' className='ViewLiveVideo'>View Live</a>
                            <NavLink to='/fullrecipe' className='ViewLiveVideo' onClick={() => getFullRecipe(recipe)}>FullRecipe</NavLink>
                        </div>

                    </div>
                ))) : (<div className="noSavedRecipes">
                    <div className="noSavedRecipesBody">
                        <h1>You have not saved any recipes 😴 !!</h1>
                        <h2>Save Your Favourite Recipes To view Here</h2>
                    </div>

                </div>)
                }
            </div>

        </>
    );
}

export default SavedRecipes;
