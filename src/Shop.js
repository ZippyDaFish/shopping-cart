import React, { Component, PureComponent } from 'react';
import TitleBar from './components/TitleBar.js'
import ProductCard from './components/ProductCard.js';

import './styles/Shop.css';

const Shop = () => {
    return(
        <div>
            <TitleBar/>
            <div className='content-container'>
                <div className='grid-container'>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </div>
    );
};

export default Shop;