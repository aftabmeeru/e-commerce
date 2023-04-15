import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Context';

import '../Styles/Navbar.scss';

import { FaUserPlus, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Home = () => {

    const { state: { cart } } = useContext(CartContext);

    const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
        <div className="brand">
            <h1>E-commerce</h1>
        </div>
        <div className="menu-list">
        <div className="links">
            <ul>
                <Link to="/" >Home</Link>
                <Link to="about" >About</Link>
                <Link to="product" >Products</Link>
                <Link to="mobile" >Mobile</Link>
            </ul>
        </div>
        <div className="cart-login">
            <Link to="cart">
                <div className="cart">
                    <span className='mob-cart'>Cart</span> <FaShoppingCart /> 
                    <span id='cart-count'> { cart.length } </span> 
                </div>
            </Link>
            <Link to="login">
                <div className="login">
                    <span className='mob-login'>Login</span> <FaUserPlus /> 
                </div>
            </Link>
        </div>
        <div className="close-menu">
            <FaTimes />
        </div>
        </div>
        <div className="open-menu">
            <FaBars />
        </div>
    </nav>
  );
}

export default Home;