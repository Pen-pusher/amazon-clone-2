import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
        />
        <Product
          id="12325841"
          title="Fitbit Versa 2 Health and Fitness Smartwatch"
          price={198.95}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41tttgs4alL._AC_US218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="13621341"
          title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers"
          price={59.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41yavwjp-8L._AC_US218_.jpg"
        />
        <Product
          id="12321876"
          title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds"
          price={130.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/51ryw1he7xL._AC_UY218_.jpg"
        />
        <Product
          id="1232231"
          title="Dash Mini Maker: The Mini Waffle Maker"
          price={9.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/41IF4qzFnEL._AC_SY200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321785"
          title="ASUS ZenBook 13 Ultra-Slim Laptop- 13.3” Full HD Wideview"
          price={699.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81e3OdfLYHL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
