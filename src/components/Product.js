import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating, description }) {
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
        description,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <Link
        to={{
          pathname: "/product/" + id,
          state: {
            id: id,
            title: title,
            price: price,
            rating: rating,
            image: image,
            description: description,
          },
        }}
      >
        <img className="product__image" src={image} />
      </Link>

      <button onClick={addToBasket} className="product__btn">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
