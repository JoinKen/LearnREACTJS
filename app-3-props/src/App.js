import React, { Component } from "react";
import "./App.css";
import Header from "./Components/2Header";
import Footer from "./Components/2Footer";
import Product from "./Components/2Product";

class App extends Component {
  render() {
    var Products = [
      {
        id: 1,
        name: "",
        price: 15888888888,
        image:
          "https://cuongquoc.com.vn/media/product/15677_gach_lat_nen_400x400_prime_01_400400_02266.jpeg",
        status: true
      },
      {
        id: 2,
        name: "",
        price: 2343242,
        image:
          "https://cuongquoc.com.vn/media/product/15677_gach_lat_nen_400x400_prime_01_400400_02266.jpeg",
        status: true
      }
    ];

    var elements = Products.map((product, index) => {
      if (product.status) {
        return (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            imageProduct={product.image}
          />
        );
      } else {
        return (
          <Product
            key={product.id}
            name={product.name}
            price={product.price + product.price}
            imageProduct={product.image}
          />
        );
      }
    });
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" />
          {elements}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
