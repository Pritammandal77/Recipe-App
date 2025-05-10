import React, { useContext, useState } from 'react';
import './MainBody.css'
import { NavLink } from 'react-router-dom';
import { RecipeContext } from '../Contexts/RecipeContext';
import { toast } from 'react-toastify';

function MainBody() {

    const { loading, recipes, setTheFullRecipe } = useContext(RecipeContext)


    //used to send the index of the recipe we click on to get the fullRecipe
    const handleFullRecipe = (recipe) => {
        console.log('this is the recipe', recipe)
        setTheFullRecipe(recipe)
    }


    // Save selected meal to localStorage
    const handleSave = (meal) => {
        const savedMeals = JSON.parse(localStorage.getItem('selectedMeals')) || [];

        // Avoid duplicates
        const isMealAlreadySaved = savedMeals.some((savedMeal) => savedMeal.idMeal === meal.idMeal);
        if (isMealAlreadySaved) {
            toast(`${meal.strMeal} is already in your favorites!`);
            return;
        }

        // Add new meal and save
        const updatedMeals = [...savedMeals, meal];
        localStorage.setItem('selectedMeals', JSON.stringify(updatedMeals));
        // alert(`${meal.strMeal} has been added to your favorites!`);
        toast(`${meal.strMeal} has been added to your favorites!`);

    };

    return (
        <>
        
            <div className="mainContainer">
                {loading ? (<div className="loaderBody"><div className="loader"></div></div>) :
                    (recipes ? (recipes.map((recipe) => (
                        <div key={recipe.idMeal} className="cardBody cardAni" onMouseEnter={() => handleFullRecipe(recipe)}>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="img" />
                            <div className="recipe-Save">
                                <h4 className="heading">{recipe.strMeal}</h4>
                                <i className="fa-regular fa-bookmark saveBtn"
                                    onClick={() => handleSave(recipe)}></i>
                            </div>
                            <p className="category">{recipe.strArea}</p>
                            <NavLink to="/fullrecipe" className="navLink" onClick={() => handleFullRecipe(recipe)}>fullRecipe</NavLink>
                        </div>
                    ))) : (<div className="noRecipeFound">
                        <div className="noFoundHeader" >
                            <h1>No Recipe Found 🥲 !! </h1>
                            <h3>Please try some another Recipes</h3>
                        </div>
                    </div>))
                }
            </div>

        </>
    );
}

export default MainBody;


//line 37 ->  //OnMouseEnter is used to send the index of the selective recipes , kyuki onClick se first time me fullRecipe nahi aa raha tha isliye ye use kiya