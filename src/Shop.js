import React, { Component, PureComponent } from 'react';
import TitleBar from './components/TitleBar.js'
import ProductCard from './components/ProductCard.js';

const Shop = () => {
    return(
        <div>
            <TitleBar/>
            <div>
                <div className='grid-container'>
                    <ProductCard/>
                </div>
            </div>
        </div>
    );
};

export default Shop;