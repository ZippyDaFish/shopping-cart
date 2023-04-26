import React, { Component } from "react";
import TitleBar from "./components/TitleBar";

import './styles/Contact.css';

import ghIcon from './images/gh-icon.png';
import igIcon from './images/ig-icon.png';
import fbIcon from './images/fb-icon.png';

const Contact = () => {
    return(
        <div>
            <TitleBar/>
            <div className="contact-container">
                <p>Don't contact us on any of these sites</p>
                <div className="contact-links">
                    <a href="https://github.com/ZippyDaFish/" target='_blank'><img src={ghIcon}/></a>
                    <a href="https://www.youtube.com/watch?v=Sagg08DrO5U" target='_blank'><img src={igIcon}/></a>
                    <a href="https://www.youtube.com/watch?v=Sagg08DrO5U" target='_blank'><img src={fbIcon}/></a>
                </div>
                <div className="address-container">
                    <p>False-ify</p>
                    <p className="address">Real Road 123, Ohio USA</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;