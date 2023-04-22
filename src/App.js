import React, { Component } from 'react';
import TitleBar from './components/TitleBar.js'

import './styles/App.css'

const App = () => {
  return(
    <div>
      <TitleBar/>
      <div className='content'>
        <div className='tagline-container'>
          <p className='tagline'>We don't sell a product, we don't sell anything!</p>
          <a href='/shop'>Shop Now</a>
        </div>
        <div className='image-container'>
          <img alt='this is an image'/>
        </div>
      </div>
    </div>
  );
};

export default App;
