import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.js'
import Shop from './Shop.js'
import Contact  from './Contact.js';

import './styles/overview.css'

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;