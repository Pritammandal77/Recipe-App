import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <h3>RecipeGram</h3>
                    <p>Discover delicious recipes <br /> and cooking tips !!</p>
                </div>
                <div className="handles">
                    <h3>Follow me on</h3>
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com/in/pritam-mandal-871510281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/Pritammandal77" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="https://www.instagram.com/pritam_mandal_77/profilecard/?igsh=MWE5cXF5ZGpxam84eA==" target="_blank"><i className="fa-brands fa-square-instagram"></i></a></li>
                        <li><a href="https://x.com/pritam_mandal77?t=QZAOEcjIQOm58j1hsAq2Bg&s=09" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 RecipeGram App. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
