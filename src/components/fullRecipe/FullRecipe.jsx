import React from 'react';
import { useContext } from 'react';
import { RecipeContext } from '../Contexts/RecipeContext';
import './FullRecipe.css'

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import MainBody from '../body/MainBody';


function FullRecipe() {

  const { theFullRecipe, getFullRecipe } = useContext(RecipeContext)
  // console.log(getFullRecipe)


  const imageRef = useRef()
  useGSAP(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      x: -500,

    })
  })

  const tableRef = useRef()
  useGSAP(() => {
    gsap.from(tableRef.current, {
      opacity: 0,
      x: 500,

    })
  })

  return (
    <>

      {getFullRecipe && <div className="fullContainer">
        <div className="fullCardBody" >
          <div className="fullImgEtc">

            <img src={getFullRecipe.strMealThumb} alt={getFullRecipe.strMeal} className="FullImg" ref={imageRef} />

            <div className="fullIngredients" ref={tableRef}>
              <table>
                <thead>
                  <tr>
                    <th>Ingredients</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{getFullRecipe.strIngredient1}</td>
                    <td>{getFullRecipe.strMeasure1}</td>
                  </tr>
                  <tr>
                    <td>{getFullRecipe.strIngredient2}</td>
                    <td>{getFullRecipe.strMeasure2}</td>
                  </tr>
                  <tr>
                    <td>{getFullRecipe.strIngredient3}</td>
                    <td>{getFullRecipe.strMeasure3}</td>
                  </tr>  <tr>
                    <td>{getFullRecipe.strIngredient4}</td>
                    <td>{getFullRecipe.strMeasure4}</td>
                  </tr>
                  {getFullRecipe.strIngredient5 &&
                    <tr>
                      <td>{getFullRecipe.strIngredient5}</td>
                      <td>{getFullRecipe.strMeasure5}</td>
                    </tr>
                  }
                  {getFullRecipe.strIngredient6 &&
                    <tr>
                      <td>{getFullRecipe.strIngredient6}</td>
                      <td>{getFullRecipe.strMeasure6}</td>
                    </tr>
                  }
                  {getFullRecipe.strIngredient7 &&
                    <tr>
                      <td>{getFullRecipe.strIngredient7}</td>
                      <td>{getFullRecipe.strMeasure7}</td>
                    </tr>
                  }
                  {getFullRecipe.strIngredient8 &&
                    <tr>
                      <td>{getFullRecipe.strIngredient8}</td>
                      <td>{getFullRecipe.strMeasure8}</td>
                    </tr>
                  }
                  {getFullRecipe.strIngredient9 &&
                    <tr>
                      <td>{getFullRecipe.strIngredient9}</td>
                      <td>{getFullRecipe.strMeasure9}</td>
                    </tr>
                  }

                </tbody>

              </table>

            </div>

          </div>
          <div className="fullHeaderEtc">
            <h1 className="fullHeading">{getFullRecipe.strMeal}</h1>
            <h2>({getFullRecipe.strArea})</h2>
          </div>
          <h4 className="fullInstructions">Instructions:</h4>
          <p className="fullRecipe" >{getFullRecipe.strInstructions}</p>

        </div>

      </div>
      }

    </>
  );
}

export default FullRecipe;
