import React from "react";
import "./ProductDetails.css";
import { useLocation } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function ProductDetails() {
  const location = useLocation();
  const { id, title, price, rating, image, description } = location.state;

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="productDetails">
      <img className="productDetails__image" src={image} alt="" />
      <div className="productDetails__info">
        <h3>{title}</h3>
        <div className="productDetails__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="productDetails__price">
          $<strong>{price}</strong>
        </p>
        <p className="productDetails__description">{description}</p>
      </div>
      <div className="productDetails__add">
        <p className="productDetails__price">
          $<strong>{price}</strong>
          <br />+ Shipping & Import Fees
        </p>
        <p className="productDetails__inStock">In Stock</p>
        <button onClick={addToBasket} className="productDetails__btn">
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
