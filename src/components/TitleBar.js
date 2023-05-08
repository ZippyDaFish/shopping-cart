import React from 'react';
import '../styles/TitleBar.css'

import cartIcon from '../images/shopping-cart-icon.png';

const TitleBar = () => {
    return(
        <div className='title-bar-container'>
            <a href='/' className='title'>False-ify</a>
            <div className='title-nav-container'>
                <a href='/' className='nav-link'>Home</a>
                <a href='/shop' className='nav-link'>Shop</a>
                <a href='/contact' className='nav-link'>Contact</a>
                <button className='open-cart-btn'><img className='cart-icon' src={cartIcon}/></button>
            </div>
        </div>
    );
};

export default TitleBar;