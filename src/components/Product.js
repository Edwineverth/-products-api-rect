import React from "react";
import confLogo from "../images/articulo.svg";
import "./styles/Badge.css";

class Product extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de conferencia"></img>
        </div>
        <div className="Badge__section-name">
          <h1>{this.props.name}</h1>
        </div>
        <div className="Badge__section-info">
          <h5>Description: {this.props.description}</h5>
          <h5>Quantity: {this.props.quantity}</h5>
          <h5>Warranty: {this.props.warranty}</h5>
          <h5>Price: {this.props.price}</h5>
          <h5>Status: {this.props.status}</h5>
          <h5>Data:</h5>
          <h6>{this.props.createAt}</h6>
        </div>
        <div className="Badge__footer">#Product</div>
      </div>
    );
  }
}
export default Product;
