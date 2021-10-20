import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="found">
            {/* Not found image */}
            <img className="imgF" src="https://cdn.pixabay.com/photo/2017/06/08/17/32/not-found-2384304_960_720.jpg" alt="" />
            <h2 className="text-center">Go Back home</h2>
            <div className="text-center mx-auto ">
            <button ><Link to="/home">HOME</Link></button>
            </div>
        </div>
    );
};

export default NotFound;