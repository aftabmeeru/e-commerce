import React from 'react';
import { useNavigate } from 'react-router-dom';

import mission from '../Assets/ecom-mission.jpg';
import vision from '../Assets/ecom-vision.jpg';
import history from '../Assets/ecom-history.jpg';
import '../Styles/Home.scss';

const Home = () => {

    const navigate = useNavigate();
    const shopNow = () => {
        navigate('/product');
    }

  return (
    <div className="Home-container">
        <div className="home-main">
        <div className="content">
            <h1>Design Your</h1>
            <h1>Comfort Zone</h1>
            <p>Transform your living space into a sanctuary with our range of home decor, furniture, kitchen essentials, and more. Create a cozy ambiance, organize your space efficiently, and add personal touches that reflect your unique style.</p>
            <button onClick={ shopNow } >shop now</button>
        </div>
        <div className="banner">
            <div className="back-img">
                <img src="https://images.pexels.com/photos/7319105/pexels-photo-7319105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="baner-1" />
            </div>
            <div className="front-img">
                <img src="https://images.pexels.com/photos/12277350/pexels-photo-12277350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="banner-2" />
            </div>
        </div>
        </div>

        <div className='featured-container'>
            <h1>Featured Products</h1>
            <div className='featured-products'>
                <div className="product">
                    <img src="https://images.pexels.com/photos/13806235/pexels-photo-13806235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" onClick={ shopNow } />
                </div>
                <div className="product">
                    <img src="https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" onClick={ shopNow } />
                </div>
                <div className="product">
                    <img src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" onClick={ shopNow } />
                </div>
            </div>
            <button onClick={ shopNow } >All Products</button>
        </div> 

        <div className="custom-container">
        <div className="custom">
            <div className="custom-content">
                <h1>Custom Furniture <br />Built Only For You</h1>
                <p>
                With a vast selection of products from trusted brands and reliable sellers, we strive to make online shopping convenient, enjoyable, and secure for you.    
                </p>
            </div>
            <div className="MVH-container">
                <div className="mvh">
                    <div className="symbol">
                        <img src={ mission } alt="mission" />
                    </div>
                    <h2>Mission</h2>
                    <p>We are dedicated to offering only the highest quality products sourced from trusted brands and reputable sellers</p>
                </div>
                <div className="mvh">
                    <div className="symbol">
                        <img src={ vision } alt="vision" />
                    </div>
                    <h2>Vision</h2>
                    <p>We believe in the power of community to enrich the shopping experience and foster meaningful connections among like-minded individuals.</p>
                </div>
                <div className="mvh">
                    <div className="symbol">
                        <img src={ history } alt="history" />
                    </div>
                    <h2>History</h2>
                    <p>Over the years, we have earned a reputation as a trusted and reliable brand known for our unwavering commitment to quality, authenticity, and customer satisfaction.</p>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default Home;