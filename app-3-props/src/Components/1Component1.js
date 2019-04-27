import React, { Component } from "react";
import Header from "./2Header"; //import vào cài này và xài ở dưới thôi
import Product from "./2Product";
import Footer from "./2Footer";

class Components extends Component {
  //CÁCH VIẾT TẠO CLASS VỚI ES6
  render() {
    return (
      <div>
        <Header />
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product />
            <Product />
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product />
            <Product />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

//MỘT CÁCH VIẾT KHÁC TRƯỚC KHI CÓ ES6
// function Components()
// {
//   return(
//     <div>
//     <Header></Header>
//     <h1>Component 1 React react</h1>
//     <p>Component!!!!</p>
//   </div>
//   );
// }

export default Components;
