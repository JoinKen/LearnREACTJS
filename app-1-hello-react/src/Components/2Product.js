import React, { Component } from "react";
class Product extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="thumbnail">
            <img data-src="as" alt="no Image" />
            <div className="caption">
              <h3>Title</h3>
              <p>...</p>
              <p>
                <a href="product" className="btn btn-primary">Action</a>
                <a href="product" className="btn btn-success">Action</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
