import React, { useState } from 'react';
import '../css/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    // setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // closemenu on click
    const closeMenu = () => setClick(false)

    // change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () =>{
        if(window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return(
        <>
            <nav className={color ? 'navbar active' : 'navbar'}>
                <a href="/">
                    <img src={logo} alt={logo} />
                </a>

                <div>
                    <ul id="navbar" className={click ? "#navbar active" : "#navbar"}>
                        <li><a href="/" onClick={closeMenu}>Home</a></li>
                        <li><a href="#HeroPage" onClick={closeMenu}>About</a></li>
                        <li><a href="#events" onClick={closeMenu}>Events</a></li>
                        <li><a href="/" onClick={closeMenu}>Organizer</a></li>
                        <li><a href="#developers" onClick={closeMenu}>Teams</a></li>
                    </ul>
                </div>

                <div id="mobile" onClick={handleClick}>
                    <i id="bar" className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar;