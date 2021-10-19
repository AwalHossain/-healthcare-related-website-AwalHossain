import React from 'react';
import './MiddlePart.css'

const MiddlePart = () => {
    return (
        <div className="py-5">
            {/* Beneficial part */}
            <hr />
            <h3 className="text-center">The benefit you will get by choosing us</h3>
            <div className="row px-5 my-5 row-cols-md-2 row-cols-lg-3 g-5">
                <div className="d-flex p-0 align-items-center">
                <div className="icon ">
                <i className="fas fa-brain"></i>
                </div>
                <div className="px-2">
                <h2>Balance Body & Mind</h2>
                <p className="mx-auto">The relationship between the mind and body is complex</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div className="icon ">
                <i className="fas fa-hiking"></i>
                </div>
                <div className="px-2">
                <h2>Physical Activity</h2>
                <p className=" mx-auto">Walking, running, dancing, swimming, yoga are a few physical activity.</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div className="icon me-2">
                <i className="fas fa-dumbbell"></i>
                </div>
                <div className="px-2">
                <h2>Fitness & Performance</h2>
                <p className=" mx-auto" >We’re here to help you overcome the barriers in the ...</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div className="icon">
                <i className="fas fa-walking"></i>
                </div>
                <div className="px-2">
                <h2>Exercise Program</h2>
                <p className=" mx-auto">You have to know which exercises are useful for which ..</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div className="icon">
                <i className="fas fa-heartbeat"></i>
                </div>
                <div className="px-2">
                <h2>Healthy Daily Life</h2>
                <p className=" mx-auto">People are most productive when they wake up, and setting .</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div className="icon">
                <i className="fas fa-medkit"></i>
                </div>
                <div className="px-2">
                <h2>Improving Healthd</h2>
                <p className=" mx-auto">The relationship between the mind and body is complex</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MiddlePart;