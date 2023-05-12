import React from "react";
import '../styles/ProductCard.css'

const ProductCard = (props) => {
    const HandleClick = () => {
        console.log(props)
    }

    return(
        <div className="product-card">
            <div className="card-img-container">
                <img className="card-img" src={props.img}></img>
            </div>
            <div className="card-info-container">
                <p className="card-name">{props.name}</p>
                <p className="card-price">{props.price}</p>
            </div>
            <button onClick={HandleClick} className="card-add-to-cart">Add to Cart</button>
        </div>
    );
};

export default ProductCard;