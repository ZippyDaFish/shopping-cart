import React, {Component} from 'react';
import { useState } from 'react';
import '../styles/TitleBar.css';

import Cart from './Cart.js';
import cartIcon from '../images/shopping-cart-icon.png';

const TitleBar = () => {
    const[cartDisplay, setCartDisplay] = useState("none");

    const OpenCart = () => {
        if(cartDisplay === "none"){
            setCartDisplay("block");
        }
        else {
            setCartDisplay("none");
        }
    }

    return(
        <div className='title-bar-container'>
            <a href='/' className='title'>False-ify</a>
            <div className='title-nav-container'>
                <a href='/' className='nav-link'>Home</a>
                <a href='/shop' className='nav-link'>Shop</a>
                <a href='/contact' className='nav-link'>Contact</a>
                <button onClick={OpenCart} className='open-cart-btn'><img className='cart-icon' src={cartIcon}/></button>
            </div>
            <Cart displayType={cartDisplay}/>
        </div>
    );
};

export default TitleBar;