import React from 'react';
import { useState } from 'react';
import '../styles/Cart.css';

import CartCard from './CartCard.js';

const Cart = (props) => {
    const[total, setTotal] = useState(0.00);

    return(
        <div className='cart-container' style={{display: props.displayType}}>
            <div>
                <p>Total: ${total}</p>
            </div>
            <div className='cart-card-container'>
                <CartCard/>
            </div>
        </div>
    );
};

export default Cart;