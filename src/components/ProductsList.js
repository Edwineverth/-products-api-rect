import React from "react";

import "../components/styles/BadgesList.css";
import { Link } from "react-router-dom";

function useSearchProducts(products) {
  const [query, setQuery] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  React.useMemo(() => {
    const result = products.filter((product) => {
      return `${product.name.toLowerCase()}`.includes(query.toLowerCase());
    });
    setFilteredProducts(result);
  }, [products, query]);
  return { query, setQuery, filteredProducts };
}

function ProductList(props) {
  const badges = props.products;
  const { query, setQuery, filteredProducts } = useSearchProducts(badges);
  if (filteredProducts.length === 0) {
    return (
      <div>
        <div className="from-group m-md-3">
          <label>Filter Products</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No encontramos ningun dato</h3>
        <Link className="btn btn-primary" to="/products/new">
          Create new Product
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="from-group m-md-3">
        <label>Filter Products</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled BadgesList">
        {filteredProducts.map((badge) => {
          return (
            <li className="" key={badge.id}>
              <Link
                className="text-reset text-decoration-none BadgesListItem"
                to={`/products/${badge.id}`}
              >
                <div>
                  <strong>Product: {badge.name}</strong>
                  <div className="Twitter__name">
                    Description: {badge.description}
                  </div>
                  <div>Quantity: {badge.quantity}</div>
                  <div>Warranty: {badge.warranty}</div>
                  <div>Price: {badge.price}</div>
                  <div>Status: {badge.status}</div>
                  <div>CreateAt: {badge.createAt}</div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
