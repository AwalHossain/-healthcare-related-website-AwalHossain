import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {title, desc, id} =props.data;
    return (
        // Card Details
    <div className="card">
        <div className="content">
            <h2 className="title">{title}</h2>
            <p className="copy">{desc}</p>
            
            <Link to={`/details/${id}`}><button className="btn btn-primary">View Tips</button></Link>
        </div>
    </div>
    );
};

export default Service;