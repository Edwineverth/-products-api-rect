import React from "react";
import "./styles/Badges.css";
import confLogo from "../images/articulo.svg";
import { Link } from "react-router-dom";
import PageLoading from "../components/Loading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";
import api from "../api";
import ProductList from "../components/ProductsList";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }
  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.Products.list();

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/products/new" className="btn btn-primary">
              New Product
            </Link>
          </div>
          <div className="BadgesList">
            <div className="Badges__container">
              <ProductList products={this.state.data} />
              {this.state.loading && <MiniLoader />}
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Products;
