import React from 'react';
import './Header.css'

const Header = () => {
    return (
        // Navigaion Bar
        <div className="sticky-top">
             <nav className="navbar   navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="/"><img src="https://727512.smushcdn.com/1881491/wp-content/themes/healthcoach/images/logo.png?lossy=1&strip=1&webp=1" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
 
                        
                        <ul className="navbar-nav  ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link text-white " aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white " href="/">Link</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white" href="/">Services</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;