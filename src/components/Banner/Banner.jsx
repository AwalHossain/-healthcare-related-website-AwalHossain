import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
      // Banner goes here
        <div className="">
          <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
            <div class="carousel-indicators ">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active position-relative">
                <img className="slide-img" src="
          https://727512.smushcdn.com/1881491/wp-content/uploads/2016/11/image-3.jpg?lossy=1&strip=1&webp=1" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-block d-md-block">
                  <h5 className="animated-left" style={{animationDelay:"1s"}}>Do Work That Aligns  <br /> with your Heart 
                  </h5>
                  <p className="animated-right " style={{animationDelay:"2s"}}>Health Coach provides world-class health, Yoga,<br /> fitness & nutrition certification programs to world-class professionals. 
                        </p>
                  <p className="animated-right" style={{animationDelay:"2s"}}><Link to="/appointment">More Info</Link></p>
                </div>
              </div>
              <div class="carousel-item ">
                <img className="slide-img" src="https://727512.smushcdn.com/1881491/wp-content/uploads/2016/11/image-2.jpg?lossy=1&strip=1&webp=1" class="d-block w-100" alt="..." />
                <div class="carousel-caption second-slide d-block d-md-block">
                  <h5 className="animated-left" style={{animationDelay:"1s"}}>We are Certified  <br /> Personal Trainer’s 
                  </h5>
                  <p className="animated-right" style={{animationDelay:"2s"}}>Health Coach provides world-class health, Yoga,<br /> fitness & nutrition certification programs to world-class professionals. 
                        </p>
                  <p className="animated-right" style={{animationDelay:"2s"}}><Link to="/appointment">More Info</Link></p>
                </div>
              </div>
              <div class="carousel-item">
                <img className="slide-img" src="https://727512.smushcdn.com/1881491/wp-content/uploads/2016/11/image-1.jpg?lossy=1&strip=1&webp=1" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-block d-md-block">
                  <h5 className="animated-left" style={{animationDelay:"1s"}}>Hi, I’m Jacqueline <br /> <span className="fs-3">Your Health Advisor</span>
                  </h5>
                  <p className="animated fadeInLeft " style={{animationDelay:"2s"}}>Health Coach provides world-class health,<br /> Yoga, fitness & nutrition certification programs to world-class professionals. 
                        .</p>
                  <p className="animated zoomIn" style={{animationDelay:"2s"}}><Link to="/appointment">More Info</Link></p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
            

        </div>
    );
};

export default Banner;