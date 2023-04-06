import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Context';

import '../Styles/Navbar.scss';

import { FaUserPlus, FaShoppingCart } from 'react-icons/fa';

const Home = () => {

    const { state: { cart } } = useContext(CartContext);

  return (
    <nav>
        <div className="brand">
            <h1>E-commerce</h1>
        </div>
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
                    Cart <FaShoppingCart /> 
                    <span id='cart-count'> { cart.length } </span> 
                </div>
            </Link>
            <Link to="login"><div className="login">Login <FaUserPlus /> </div></Link>
        </div>
    </nav>
  );
}

export default Home;