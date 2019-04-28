import React, { Component } from "react";
class Product extends Component {

  constructor(props) {
    super(props);
    // this.onToCart = this.onToCart.bind(this);
    console.log(props);
  }
  onToCart() {
    alert(this.props.price);
    console.log(this.props.price);
  }
  onToCart2 = () => {
    alert(this.props.price);
    console.log(this.props.price);
  }
  render() {
    return (
      <div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="thumbnail">
            <img src={this.props.imageProduct} alt={this.props.children} />
            <div className="caption">
              <h3>{this.props.children}</h3>
              <p>{this.props.price}</p>
              <p>
                <a href="product" className="btn btn-success"
                  onClick={this.onToCart2}>
                  Action
          </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;