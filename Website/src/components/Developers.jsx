import React from "react";
import '../css/Developers.css';
import bg from '../assets/developer-bg.mp4';
import alok from '../assets/alok.png';
import chandan from '../assets/chandan.jpg';
import rajeev from '../assets/rajeev.png';
import bishwarup from '../assets/bishwarup.jpg'

const Developers = () =>{

    const image = {
        height: '250px',
        width: '250px',
        borderRadius: 125
    }
    return(
        <>
        <div id="developers" className="developers">
            <header className="heading">Developers</header>
            <div className="container-fluid">
                <video autoPlay loop>
                    <source src={bg} type="video/mp4"/>    
                </video>
                <div className="row">
                    <div className="cards">
                        <img src={alok} className="cards-img" style={image} alt=""/>
                        <h3>Alok Mahato</h3>
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/alokmht07/" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/alokmht_07" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-square-x-twitter"></i>
                            </a>
                        </div>  
                    </div>
                    <div className="cards">
                        <img src={chandan} className="cards-img" style={image} alt=""/>
                        <h3>Chandan Majhi</h3>
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/chandan-majhi-8a45b9222/" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/chandan_majhi_7" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-square-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={rajeev} className="cards-img" style={image} alt=""/>
                        <h3>Kumar Rajeev</h3>
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/kumar-rajeev-li22/" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/Poison_X_" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-square-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="cards">
                        <img src={bishwarup} className="cards-img" style={image} alt=""/>
                        <h3>Bishwarup DAS</h3>
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/bishwarup-das-278110239/" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/BishwarupDas934" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-square-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Developers;