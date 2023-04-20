import React from 'react';
import '../styles/TitleBar.css'

const TitleBar = () => {
    return(
        <div className='title-bar-container'>
            <p className='title'>False-ify</p>
            <div className='title-nav-container'>
                <p className='nav-link'>Home</p>
                <p className='nav-link'>Shop</p>
                <p className='nav-link'>Contact</p>
            </div>
        </div>
    );
};

export default TitleBar;