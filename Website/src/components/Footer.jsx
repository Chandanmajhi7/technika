import React from "react";
import '../css/Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
    return(
        <>
        <footer>
            <div className="footer">
                <div className="col">
                    <img src={logo} alt={logo} className="logo" />
                    <h3><b>ARKA JAIN UNIVERSITY </b><div className="underline"><span></span></div></h3>
                    <p><b>IN "TOP-15 EMERGING PRIVATE UNIVERSITIES IN INDIA" CATEGORY</b></p>
                    <p className="website"><i class="fa-solid fa-globe"></i>
                    <a href="https://arkajainuniversity.ac.in/">arkajainuniversity.ac.in</a></p>
                </div>
                <div className="col">
                    <h3>Campus <div className="underline"><span></span></div></h3>
                    <p>Opp. To Kerala Public School</p>
                    <p>Vill.- Mohanpur, Gamharia</p>
                    <p>Dist.- Seraikela Kharsawan, Jharkhand-832108</p>
                </div>
                <div className="col">
                    <h3>Links <div className="underline"><span></span></div></h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Events</a></li>
                        <li><a href="/">Organizer</a></li>
                        <li><a href="/">Teams</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Contact <div className="underline"><span></span></div></h3>
                    <form action="">
                        <i className="fa-regular fa-envelope"></i>
                        <input type="email" placeholder="Enter your email id" required />
                        <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                    <div className="social-icon">
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright">Coding Club &#169; 2023 - All Rights Reserved</p>
        </footer>
        </>
    )
}


export default Footer;