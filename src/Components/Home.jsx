import React from 'react';
import { useNavigate } from 'react-router-dom';

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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
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
            <div className="content">
                <h1>Custom Furniture <br />Built Only For You</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.    
                </p>
            </div>
            <div className="MVH-container">
                <div className="mvh">
                    <div className="symbol"></div>
                    <h2>Mission</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                </div>
                <div className="mvh">
                    <div className="symbol"></div>
                    <h2>Vision</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                </div>
                <div className="mvh">
                    <div className="symbol"></div>
                    <h2>History</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default Home;