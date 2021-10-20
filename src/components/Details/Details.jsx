import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const {serviceId} = useParams();
    const [file, setFile] =useState([]);
    useEffect(()=>{
        fetch('https://awalhossain.github.io/host-file/service.json')
        .then(res => res.json())
        .then(data => setFile(data))
    },[])
    const logFile = file.find(data =>( data.id == serviceId))

    
    return (
        <div className="d-flex container my-5 justify-content-center">
            {/* Details & dynamic route */}
            <div className="d-md-flex justify-content-center " >
            <img src={logFile?.img} className="img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{logFile?.title}</h5>
                <p className="card-text">{logFile?.desc}</p>
                <Link className="btn btn-primary" to="/appointment">Make an Appointment</Link>
            </div>
            </div>
        </div>
    );
};

export default Details;