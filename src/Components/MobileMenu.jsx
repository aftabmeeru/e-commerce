import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/MobileMenu.scss';

const MobileMenu = () => {

  return (
    <div className='mobile-container'>
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
    </div>
  );
}

export default MobileMenu;