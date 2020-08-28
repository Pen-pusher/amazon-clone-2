import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "../config/firebase";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
    return () => {
      //
    };
  }, []);

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      <div className="home__row">
        {products.map((item) => (
          <Product
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
