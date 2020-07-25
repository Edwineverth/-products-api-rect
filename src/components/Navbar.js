import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Products</span>
            <span className="font-weight-bold">Every</span>
          </Link>
        </div>
      </div>
    );
  }
}
export default Navbar;
