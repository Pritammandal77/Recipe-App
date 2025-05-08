import React, { useState } from 'react';
import './Header.css'
import { useContext } from 'react';
import { RecipeContext } from '../Contexts/RecipeContext';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';


function Header() {

    const { updateRecipes } = useContext(RecipeContext)

    const [inputValue, setInputValue] = useState("")

    //used to get the input"s value
    const handleRecipeName = (e) => {
        setInputValue(e.target.value)
    }

    //used to send the inputted recipe name to the API link that we want
    const handleSubmit = () => {
        updateRecipes(inputValue)
        setInputValue("")
    }


    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }

    useGSAP(() => {
        gsap.from(".navAni", {
            opacity: 0,
            duration: 0.8,
            y: -100,

        })
    })


    return (
        <>

            <div className="navBody">
                <div className="appName navAni" >
                    <div className='appLogo-Name'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKD2VIO2sHOOq3giX8eqVT5Uh5_oTACmWkdg&s" alt="" className="appLogo" />
                        <p className="p">RecipeGram</p>
                    </div>

                    <div className="navElement">
                        <NavLink to='/' className="pathHome"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "600" : "400",
                            })}>Home</NavLink>

                        <NavLink to='/savedrecipes' className="savedRecipes"
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "600" : "400",
                            })}>Saved</NavLink>
                    </div>
                </div>
                <div className="search navAni">
                    <input type="text" className="input" placeholder="Enter the recipe name"
                        value={inputValue} onChange={handleRecipeName} onKeyDown={handleKeyDown} />
                    <button className="btn" onClick={handleSubmit} >
                        <NavLink to='/' className="goToHome">Search</NavLink>
                    </button>
                </div>
            </div>

        </>
    );
}

export default Header;
