import React from "react";
import '../css/About.css';
import tech from '../assets/tech.gif';

const About = () =>{
    return(
        <>
            <section id="about" className="about-us">
                <div className="about">
                    <img src={tech} alt={tech} className="pic"/>
                    <div className="text">
                        <h2>TECHNIKA 2K23</h2>
                        <h5>ARKA JAIN UNIVERSITY <span>JHARKHAND</span></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
                        <div className="data">
                            <a href="/" className="btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;