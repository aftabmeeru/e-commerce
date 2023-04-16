import React, { useContext } from 'react';
import { CartContext } from './Context';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserPlus, FaTimes } from 'react-icons/fa';

// import '../Styles/MobileMenu.scss';

const MobileMenu = ({setShowMenu}) => {

  const { state: { cart } } = useContext(CartContext);

  return (
    <div className="mobile-menu">
        <div className="menu-list">
            <div className="links">
                <ul>
                    <Link onClick={() => setShowMenu(false)} to="/" >Home</Link>
                    <Link onClick={() => setShowMenu(false)} to="about" >About</Link>
                    <Link onClick={() => setShowMenu(false)} to="product" >Products</Link>
                </ul>
            </div>
            <div className="cart-login">
                <Link onClick={() => setShowMenu(false)} to="cart">
                    <div className="cart">
                        <span className='mob-cart'>Cart</span> <FaShoppingCart /> 
                        <span id='cart-count'> { cart.length } </span> 
                    </div>
                </Link>
                <Link onClick={() => setShowMenu(false)} to="login">
                    <div className="login">
                        <span className='mob-login'>Login</span> <FaUserPlus /> 
                    </div>
                </Link>
            </div>
            <div className="close-menu" onClick={() => setShowMenu(false)}>
                <FaTimes />
            </div>
        </div>
    </div>
  );
}

export default MobileMenu;