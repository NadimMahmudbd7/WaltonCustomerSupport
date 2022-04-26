import React, { useEffect, useState } from 'react';
import banner from "../images/banner.png";
import waltonbanner from "../images/nonfrost.jpg";
import love from "../images/w-title-b.png";
import wicon1 from "../images/w-icon-1.png";
import wicon2 from "../images/w-icon-2.png";
import wicon3 from "../images/w-icon-3.png";
import wicon4 from "../images/w-icon-4.png"
import visit from "../images/visit.jpg"
import chat from "../images/chat.png"
import solve from "../images/solve.png"
import Service from '../Service/Service';
import "./Home.css"
import Helmeted from '../../Helmet/Helmet';


const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/blogs")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Helmeted title="Home"></Helmeted>
            {/* Carosel section */}
            <div id="carouselExampleCaptions" className="carousel slide animate__animated wow animate__zoomIn" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={waltonbanner} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Walton Our Products</h2>
                            <p>Events are back!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Welcome section */}
            <div className="welcome d-flex align-items-center justify-content-center flex-column my-5">
                <h2 className='text-center mt-5 animate__animated wow animate__slideInDown'>Welcome to <span style={{fontSize:"40px"}}>Walton Refrigerator</span> Customer Serivce Point</h2>
                <img src={love} alt="" />
            </div>
            <div className="container">
            <div className="CustomerStatus row " >
                <div className="onePerson animate__animated wow animate__slideInLeft col-3 d-flex align-items-center justify-content-center flex-column">
                    <img src={wicon1} alt="" />
                    <h1>1611</h1>
                    <small>Total Members</small>
                </div>
                <div className="onePerson onePerson animate__animated wow animate__slideInUp col-3 d-flex align-items-center justify-content-center flex-column">
                    <img src={wicon2} alt="" />
                    <h1>500</h1>
                    <small>Members online</small>
                </div>
                <div className="onePerson onePerson onePerson animate__animated wow animate__slideInUp col-3 d-flex align-items-center justify-content-center flex-column">
                    <img src={wicon3} alt="" />
                    <h1>300</h1>
                    <small>Men online</small>
                </div>
                <div className="onePerson onePerson onePerson animate__animated wow animate__slideInRight col-3 d-flex align-items-center justify-content-center flex-column">
                    <img src={wicon4} alt="" />
                    <h1>200</h1>
                    <small>Women online</small>
                </div>
            </div>
            </div>
            {/* welcome section end */}

            
            <div className="ServiceSection">
                <h1 className='text-center my-5 animate__animated wow animate__slideInDown'>Solved Problem</h1>

                <div className="allServices pb-5">
                    {
                        services.map(oneService => <Service oneService={oneService} key={oneService._id}></Service>)
                    }
                </div>
            </div>

            <div className="SoulMate container">
            <div className="welcome d-flex align-items-center justify-content-center flex-column my-5">
                <h2 className='text-center mt-5 animate__animated wow animate__slideInDown'>If you have still Problem ? Send Live Message</h2>
                <img src={love} alt="" />
            </div>
            <div className="Customer Status row">
                <div className="onePerson col-4 d-flex align-items-center justify-content-center flex-column animate__animated wow animate__slideInLeft">
                    <img className='iconImage' src={visit} alt="" />
                    <h2>Visit Our Website</h2>
                </div>
                <div className="animate__animated wow animate__slideInUp onePerson col-4 d-flex align-items-center justify-content-center flex-column">
                    <img className='iconImage' src={chat} alt="" />
                    <h2>Share your Problem</h2>
                </div>
                <div className="animate__animated wow animate__slideInRight onePerson col-4 d-flex align-items-center justify-content-center flex-column">
                    <img className='iconImage' src={solve} alt="" />
                    <h2>Solve Your Problem</h2>
                </div>
            </div>
            </div>

            {/* FooterSection */}
            <footer className="footer-details">
                <div className="footer-title">
                    <h2><span className='chapai'>Walton Refrigerator</span> Customer Service Point</h2>
                    <p>Copyright &copy; 2022  Nadim Mahmud</p>
                    <p>All rights reserved</p>
                </div>
                <div className="footer-icon">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>

                </div>
            </footer>
        </div>
    );
};

export default Home;