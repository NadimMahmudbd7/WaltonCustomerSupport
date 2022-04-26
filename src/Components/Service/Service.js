import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"


const Service = ({ oneService }) => {
    const { id, name, price, description, img } = oneService
    return (
        <div>
            <div className="services container animate__animated wow animate__slideInUp">
                <img className='image' src={img} alt="" />
                <div className="details">
                    <h1>{name}</h1>
                    <small>{description}</small>
                    <Link to={"/checkout"}>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;