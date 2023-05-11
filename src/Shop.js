import React, { Component, PureComponent } from 'react';
import TitleBar from './components/TitleBar.js'
import ProductCard from './components/ProductCard.js';

import './styles/Shop.css';

import SailboatFuel from './images/sailboat-fuel.jpg';
import Breadstick from './images/breadstick.png';
import Trapezoid from './images/trapezoid.png';
import Backpack from './images/backpack.jpg';
import Sunlight from './images/sunlight.jpg';
import Doodad from './images/doodad.jpg';

const Shop = () => {
    return(
        <div>
            <TitleBar/>
            <div className='content-container'>
                <div className='grid-container'>
                    <ProductCard img={SailboatFuel} name="Sailboat Fuel" price="$2.40"/>
                    <ProductCard img={Doodad} name="Conspicuous Doodad" price="$0.01"/>
                    <ProductCard img={Breadstick} name="Breadstick" price="$8.99"/>
                    <ProductCard img={Sunlight} name="Bottled Sunlight" price="$275.99"/>
                    <ProductCard img={Breadstick} name="Breadstick (Expensive)" price="$999.99"/>
                    <ProductCard img={Trapezoid} name="Trapezoid" price="$55.60"/>
                    <ProductCard img={Backpack} name="Completely Normal Backpack" price="$24.95"/>
                    <ProductCard img={Breadstick} name="Breadstick (Cheap)" price="$2.75"/>
                </div>
            </div>
        </div>
    );
};

export default Shop;