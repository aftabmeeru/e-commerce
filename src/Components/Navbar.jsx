import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Context';

import '../Styles/Navbar.scss';

import { FaUserPlus, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import MobileMenu from './MobileMenu';

const Home = () => {

    const [showMenu, setShowMenu] = useState(false);

    const { state: { cart } } = useContext(CartContext);

  return (
    <nav>
        <div className={`mobile-menu ${showMenu ? "mobile-menu-open" : ""}`}>
            <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
        <div className="brand">
            <h1>E-commerce</h1>
        </div>
        <div className="menu-list">
            <div className="links">
                <ul>
                    <Link to="/" >Home</Link>
                    <Link to="about" >About</Link>
                    <Link to="product" >Products</Link>
                </ul>
            </div>
            <div className="cart-login">
                <Link to="cart">
                    <div className="cart">
                        <span className='mob-cart'>Cart</span> <FaShoppingCart /> 
                        <span id='cart-count'> { cart === null ? 0 : cart.length } </span> 
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
        <div className="open-menu" onClick={() => setShowMenu(!showMenu)}>
            <FaBars />
        </div>
    </nav>
  );
}

export default Home;