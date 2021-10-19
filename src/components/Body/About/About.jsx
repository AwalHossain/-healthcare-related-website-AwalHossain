import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>
            <section className="default-section my-5">
            <div className="text-center my-5 ">
                <h2 className="fw-bold">A Natural way of improving your health.</h2>
                <p className="p-2">We handpick the best coaches and health experts from <br /> across the country to make sure you get the most personalized health care you deserve between those doctor visits.</p>
            </div>
        <div className="container">
            <div className="row ">
                
                {/* <!--Video Column--> */}
                <div className="column video-column col-md-12 col-lg-6 col-sm-12 col-xs-12">
                    <div className="inner-box wow fadeIn animated" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: "visible", animationDuration: "1500ms", animationDelay:" 0ms",animationName: "fadeIn"}}>
                        {/* <!--featured-image-box--> */}
                        <div className="video-image-box">
                            <figure className="image mb-0" >
                                <iframe className="w-md-50 " width="560" height="315" src="https://www.youtube.com/embed/1sVEYNH8gbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </figure>
                            <div className="caption-box ">“ Watch our video to learn how you can be a part of the health revolution as a Health Coach! “</div>
                        </div>
                    </div>
                </div>
            
            {/* <!--Text Column --> */}
                <div className="column text-column col-md-12 col-lg-6 col-sm-12 col-xs-12">
                    <h2 className="px-2">We Have The Best Caretaker to Providing Best Services  <a href="/">Purchase – Healthcoach.</a> </h2>
                    <div className="inner-box">
                        <div className="text px-2">Explain to you how all this mistaken idea of denouncing ut pleasure work praising pain was born and will give you can complete design account sed the system, and expound the actual teachngs interior of the great design explorer of the truth master-builders design of human happiness one seds rejects, dislikes, or avoids pleasures give of the master-builder of human itself.</div>
                        <div className="signature-image"><img width="200" height="110" src="https://727512.smushcdn.com/1881491/wp-content/uploads/2016/11/signature.png?lossy=1&amp;strip=1&amp;webp=1" className="img-responsive" alt="" /></div>
                        <div className="about-owner">
                            <h4>William Shocks,  <span className="designation">Founder</span></h4>
                            <div className="company-title styled-font">Healthcoach</div>
                        </div>
                    </div>
                </div>   
         </div>
    </div>
</section>
        </div>
    );
};

export default About;