import React, { useEffect, useState } from 'react';
import './SavedRecipes.css'


function SavedRecipes() {

    const [displaySavedRecipe, setDisplaySavedRecipe] = useState([]);

    useEffect(() => {
        const savedMeals = JSON.parse(localStorage.getItem('selectedMeals')) || [];
        setDisplaySavedRecipe(savedMeals)
        console.log('Saved Meals:', savedMeals);
    }, [localStorage.getItem('selectedMeals')]);

    const deleteRecipes = () => {
        localStorage.removeItem('selectedMeals')
        setDisplaySavedRecipe([])
    }

    return (
        <>

            <div className="SavedHeading">
                <h2> This are the Saved Recipes </h2>
                <button className="Btn" onClick={deleteRecipes}>
                    <div className="sign">
                        <svg
                            viewBox="0 0 16 16"
                            className="bi bi-trash3-fill"
                            fill="currentColor"
                            height="18"
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
                            ></path>
                        </svg>
                    </div>

                    <div className="text">Delete</div>
                </button>
            </div>
            <div className="savedElement">
                {displaySavedRecipe.length > 0 ? (displaySavedRecipe.map((recipe) => (
                    <div key={recipe.idMeal} className="cardBody savedCard" >
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="img" />
                        <div className="recipe-Save">
                            <h3 className="heading">{recipe.strMeal}</h3>
                        </div>
                        <h6 className="category"> Area : {recipe.strArea}</h6>
                        <h6 className="category"> Category : {recipe.strCategory}</h6>
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
