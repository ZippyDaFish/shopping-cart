import React from 'react';
import '../styles/Cart.css';

const Cart = (props) => {
    return(
        <div className='cart-container' style={{display: props.displayType}}>
            <div>
                <p>Total: $0.00</p>
            </div>
            <div className='cart-card-container'>
            </div>
        </div>
    );
};

export default Cart;