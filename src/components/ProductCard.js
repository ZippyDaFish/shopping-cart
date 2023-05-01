import React from "react";
import '../styles/ProductCard.css'

const ProductCard = () => {
    return(
        <div className="product-card">
            <img></img>
            <p>Name</p>
            <p>Price</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;