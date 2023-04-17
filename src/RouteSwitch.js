import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.js'
import Homepage from './homepage.js';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'/>
            </Routes>
        </BrowserRouter>
    )
}