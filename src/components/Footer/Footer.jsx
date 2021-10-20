import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div >
          {/* <!-- Site footer --> */}
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">HealthCoach <i>CODE WANTS TO BE SIMPLE </i> Your Transformation is our passion & We are your personal trainers, trained nutritionist, your supplement experts, your health coach, your support group We Provide technology ut tools great explorers of the truth, the masters of human happiness need burn fat, build become your best sel</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
             <li>
               <Link to="/services">Exercise Program</Link>
             </li>
             <li>
               <Link to="/services">Balance Body & Mind</Link>
             </li>
             <li>
               <Link to="/services">Physical Activity</Link>
             </li>
             <li>
               <Link to="/services">Improving Healthd</Link>
             </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
              <Link to="/about">About us</Link>
              </li>
              <li>
              <Link to="/services">services</Link>
              </li>
              <li>
              <Link to="/login">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="/">HealthCoach</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link to="https://www.facebook.com/"><i className="fab fa-google"></i></Link></li>   
              <li><Link to="https://www.google.com/"><i className="fab fa-facebook"></i></Link></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>



        </div>
    );
};

export default Footer;