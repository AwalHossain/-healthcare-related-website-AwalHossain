import React from 'react';
import './Package.css'
const Package = () => {
    return (
        <div className="container my-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
             {/* <!-- Container for all products --> */}
            <div className="d-flex   pack-card flex-column justify-content-center align-items-center">
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
                    <button className="choose-btn ">
                        CHOOSE PLAN
                    </button>
                    </div>
                </div>
            </div>
            {/* Package card-2 */}
            <div className="d-flex flex-column pack-card justify-content-center align-items-center">
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
                    <button className="choose-btn ">
                        CHOOSE PLAN
                    </button>
                    </div>
                </div>
            </div>
            {/* Package card-3 */}
            <div className="d-flex pack-card flex-column justify-content-center align-items-center">
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
                    <button className="choose-btn ">
                        CHOOSE PLAN
                    </button>
                    </div>
                </div>
            </div>
        
        </div>
        </div>
    );
};

export default Package;