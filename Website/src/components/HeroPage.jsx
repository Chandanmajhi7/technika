import React from "react";
import '../css/HeroPage.css';
import Hero from '../assets/hero-bg.mp4';

const HeroPage = () =>{
    return(
        <>
            <div id="HeroPage" className="container">
                <video autoPlay loop>
                    <source src={Hero} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default HeroPage;