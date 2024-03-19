import React from 'react';

import '../Styles/About.scss';

const About = () => {

  return (
    <>
        <div className="about-container">
            <div className="banner-img">
                <img src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg" alt="banner-img" />
            </div>
            <div className="about-content">
                <h2>Our Story</h2>
                <p>Our story begins with a small team of passionate entrepreneurs who shared a common vision: to revolutionize the way people shop by harnessing the power of the internet. We started as a modest online platform with a handful of products and a dream to make shopping more convenient, accessible, and enjoyable for everyone. <br /> <br />
                In the early days, we faced numerous challenges and obstacles as we navigated the rapidly evolving landscape of e-commerce. From technological limitations to fierce competition, every hurdle presented an opportunity for us to learn, adapt, and grow stronger. Through perseverance and a relentless focus on customer satisfaction, we gradually expanded our product offerings, improved our services, and gained the trust and loyalty of our customers.
                </p>
            </div>  
        </div>   
    </>
  );
}

export default About;