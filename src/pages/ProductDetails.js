import React from "react";
import confLogo from "../images/platziconf-logo.svg";
import "../pages/styles/BadgeDetails.css";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import DeleteBadgeModal from "../components/DeleteProductModal";

function ProductDetails(props) {
  const badge = props.badge;
  let product = {};
  for (const key in badge) {
    if (badge.hasOwnProperty(key)) {
      product = badge[key];
    }
  }
  console.log(product.name);
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                class="Imagen_header"
                src={confLogo}
                alt="Logo de la Conferencia"
              />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>Product</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Product
              name={product.name}
              description={product.description}
              quantity={product.quantity}
              warranty={product.warranty}
              price={product.price}
              status={product.status}
              createAt={product.createAt}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <Link
                className="btn btn-primary mb-4"
                to={`/products/${product.id}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button
                onClick={props.onOpenModal}
                className="btn btn-danger mb-4"
              >
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
