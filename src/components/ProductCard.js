import React from "react";
import '../styles/ProductCard.css'

const ProductCard = (props) => {
    return(
        <div className="product-card">
            <div className="card-img-container">
                <img src={props.img}></img>
            </div>
            <div className="card-info-container">
                <p className="card-name">{props.name}</p>
                <p className="card-price">{props.price}</p>
                <button className="card-add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;