import React from 'react';
import Banner from '../Banner/Banner';
import About from '../Body/About/About';
import Blog from '../Body/Blog/Blog';
import MiddlePart from '../Body/MiddlePart/MiddlePart';
import Package from '../Body/Package/Package';
import Services from '../Body/Services/Services';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
      <Services></Services>
      <About></About>
      <MiddlePart></MiddlePart>
      <Package></Package>
        </div>
    );
};

export default Home;