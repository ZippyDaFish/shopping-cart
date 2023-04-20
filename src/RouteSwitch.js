import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.js'
import Shop from './Shop.js'

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/shop' element={<Shop/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;