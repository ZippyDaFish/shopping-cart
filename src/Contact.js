import React, { Component } from "react";
import TitleBar from "./components/TitleBar";

const Contact = () => {
    return(
        <div>
            <TitleBar/>
            <div className="contact-links">
                <p>Don't contact us on any of these sites</p>
                <a href="https://github.com/ZippyDaFish/" target='_blank'>Github</a>
                <a href="https://www.youtube.com/watch?v=Sagg08DrO5U" target='_blank'>Instagram</a>
                <a href="https://www.youtube.com/watch?v=Sagg08DrO5U" target='_blank'>Facebook</a>
            </div>
            <div className="address-container">
                <p className="address">Real Road 123, Ohio USA</p>
            </div>
        </div>
    );
};

export default Contact;