import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css'
const Package = () => {
    return (
        <div className="my-5 ">
                    <div className="row my-2 row-cols-1 row-cols-md-2 row-cols-lg-3  ">
             {/* <!-- Container for all products --> */}
            <div className=" pack-card ">
                <p className="text-gray fw-bold">Silver</p>
                <h3>Single Deep Session</h3>
                <div className="text-center">
                    <p className="price">248</p>
                    <p className="usd">USD/Package</p>
                </div>
                <div>
                    <p className="desc text-center">
                    45 x 30 minute Life Coaching sessions Free email support for the duration of the coaching.
                    </p>
                    <div className="text-center">
                    <Link to="/appointment">
                      <button className="choose-btn p-2 ">
                      CHOOSE PLAN
                     </button>  
                       </Link>
                    </div>
                </div>
            </div>
            {/* Package card-2 */}
                <div className="  pack-card ">
                    <p className="text-gray fw-bold">Gold</p>
                    <h3>4 Month Package</h3>
                    <div className="text-center">
                        <p className="price">448</p>
                        <p className="usd">USD/Package</p>
                    </div>
                    <div>
                        <p className="desc text-center">
                        Up to a maximum of 28 sessions over 4 month period & Sessions up to maximum of 75 minutes.
                        </p>
                        <div className="text-center">
                        <Link to="/appointment">
                        <button className="choose-btn p-2 ">
                        CHOOSE PLAN
                        </button>  
                        </Link>
                        </div>
                    </div>
                </div>
            {/* Package card-3 */}
                <div className=" pack-card justify-content-center align-items-center">
                    <p className="text-gray fw-bold">Platinum</p>
                    <h3>6 Month Package</h3>
                    <div className="text-center">
                        <p className="price">648</p>
                        <p className="usd">USD/Package</p>
                    </div>
                    <div>
                        <p className="desc text-center">
                        45 x 30 minute Life Coaching sessions Free email support for the duration of the coaching.
                        </p>
                        <div className="text-center">
                        <Link to="/appointment">
                        <button className="choose-btn p-2 ">
                        CHOOSE PLAN
                        </button>  
                        </Link>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    );
};

export default Package;