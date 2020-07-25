import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import Products from "../pages/Products";
import ProductNew from "../pages/ProductsNew";
import ProductsDetailsContainer from "../pages/ProductDetailsContainer";
import ProductEdit from "../pages/ProductEdit";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/new" component={ProductNew} />
          <Route
            exact
            path="/products/:badgeId"
            component={ProductsDetailsContainer}
          />
          <Route exact path="/products/:badgeId/Edit" component={ProductEdit} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
