import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {title, desc, id, img} =props.data;
    return (
        // Card Details
        <div className="col">
        <div className="card h-100">
        <img className="card-image " src={img} alt="mparticle" />
            <div className="card-body d-flex flex-column">
            <h2 className="title ">{title}</h2>
            <p className=" card-text p-2">{desc.slice(0, 100)} ....</p>
            

            <div class="sticky-bottom mt-auto">
      <Link to={`/details/${id}`}><button className="btn  sticky-bottom btn-primary" style={{width:"100%"}}>View Tips</button></Link>
    </div>
            </div>
        </div>

        </div>
    );
};

export default Service;