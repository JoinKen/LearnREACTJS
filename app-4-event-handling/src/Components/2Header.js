import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="header">
            PROPS OF COMPONENT
          </a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="header">PRODUCTS</a>
            </li>
            <li>
              <a href="header">INFO</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
