import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="header">Title</a>
          <ul className="nav navbar-nav">
            <li className="active"><a href="header">Home</a></li>
            <li><a href="header">Link</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
