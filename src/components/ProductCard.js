import React from "react";
import '../styles/ProductCard.css'

const ProductCard = () => {
    return(
        <div className="product-card">
            <div className="card-img-container">
                <img></img>
            </div>
            <div className="card-info-container">
                <p className="card-name">Name</p>
                <p className="card-price">Price</p>
                <button className="card-add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;