import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {

    const [inputData, setInputData] = useState("")

    //To get the id of meal for fullRecipe
    const [theFullRecipe, setTheFullRecipe] = useState("")   // we are getting the fullrecipe data from mainbody.jsx

    const [recipes, setRecipes] = useState([]);

    const [loading, setLoading] = useState(true)


    const updateRecipes = (data) => {
        setInputData(data) 
    }
    // console.log(inputData)


    try {
        useEffect(() => {

            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data.meals[0])
                    setRecipes(data.meals); // Store the fetched data in state

                    setLoading(false)
                    
                })
                .catch((error) => console.error('Error fetching data:', error));
        }, [inputData, theFullRecipe]);
    
    } catch (error) {
        console.log(error)
    }
    

    return (
        <RecipeContext.Provider value={{ inputData, updateRecipes, recipes, theFullRecipe, setTheFullRecipe, loading}}>
            {children}
        </RecipeContext.Provider>
    )
}
