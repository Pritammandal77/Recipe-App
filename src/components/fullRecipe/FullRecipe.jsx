import React from 'react';
import { useContext } from 'react';
import { RecipeContext } from '../Contexts/RecipeContext';
import './FullRecipe.css'

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MainBody from '../body/MainBody';


function FullRecipe() {

  const { theFullRecipe } = useContext(RecipeContext)

  // console.log('the full recipe in fulrecipe.jsx', theFullRecipe)

  // const imageRef = useRef()
  // useGSAP(() => {
  //   gsap.from(imageRef.current, {
  //     opacity: 0,
  //     x: -500,
  //   })
  // })


  // const tableRef = useRef()
  // useGSAP(() => {
  //   gsap.from(tableRef.current, {
  //     opacity: 0,
  //     x: 500,

  //   })
  // })

  return (
    <>

      {theFullRecipe && <div className="fullContainer">
        <div className="fullCardBody" >
          <div className="fullImgEtc">

            <img src={theFullRecipe.strMealThumb} alt={theFullRecipe.strMeal} className="FullImg" />

            <div className="fullIngredients" >
              <table>
                <thead>
                  <tr>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{theFullRecipe.strIngredient1}</td>
                    <td>{theFullRecipe.strMeasure1}</td>
                  </tr>
                  <tr>
                    <td>{theFullRecipe.strIngredient2}</td>
                    <td>{theFullRecipe.strMeasure2}</td>
                  </tr>
                  <tr>
                    <td>{theFullRecipe.strIngredient3}</td>
                    <td>{theFullRecipe.strMeasure3}</td>
                  </tr>  <tr>
                    <td>{theFullRecipe.strIngredient4}</td>
                    <td>{theFullRecipe.strMeasure4}</td>
                  </tr>
                  {theFullRecipe.strIngredient5 &&
                    <tr>
                      <td>{theFullRecipe.strIngredient5}</td>
                      <td>{theFullRecipe.strMeasure5}</td>
                    </tr>
                  }
                  {theFullRecipe.strIngredient6 &&
                    <tr>
                      <td>{theFullRecipe.strIngredient6}</td>
                      <td>{theFullRecipe.strMeasure6}</td>
                    </tr>
                  }
                  {theFullRecipe.strIngredient7 &&
                    <tr>
                      <td>{theFullRecipe.strIngredient7}</td>
                      <td>{theFullRecipe.strMeasure7}</td>
                    </tr>
                  }
                  {theFullRecipe.strIngredient8 &&
                    <tr>
                      <td>{theFullRecipe.strIngredient8}</td>
                      <td>{theFullRecipe.strMeasure8}</td>
                    </tr>
                  }
                  {theFullRecipe.strIngredient9 &&
                    <tr>
                      <td>{theFullRecipe.strIngredient9}</td>
                      <td>{theFullRecipe.strMeasure9}</td>
                    </tr>
                  }

                </tbody>

              </table>

            </div>

          </div>
          <div className="fullHeaderEtc">
            <h1 className="fullHeading">{theFullRecipe.strMeal}</h1>
            <h2>({theFullRecipe.strArea})</h2>
          </div>
          <h4 className="fullInstructions">Instructions:</h4>
          <p className="fullRecipe" >{theFullRecipe.strInstructions}</p>

        </div>

      </div>
      }

    </>
  );
}

export default FullRecipe;
