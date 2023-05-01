import React from "react";
import '../styles/ProductCard.css'

const ProductCard = () => {
    return(
        <div className="product-card">
            <div className="card-img-container">
                <img></img>
            </div>
            <div className="card-info-container">
                <p>Name</p>
                <p>Price</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;