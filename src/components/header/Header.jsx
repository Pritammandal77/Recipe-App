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
        if(event.key === "Enter"){
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
                    <img src="data:image/png;base64,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" alt="" className="appLogo"/>
                    <p className="p">RecipeGram</p>
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
                        value={inputValue} onChange={handleRecipeName} onKeyDown={handleKeyDown}/>
                    <button className="btn" onClick={handleSubmit} >
                        <NavLink to='/' className="goToHome">Search</NavLink>
                    </button>
                </div>
            </div>

        </>
    );
}

export default Header;
