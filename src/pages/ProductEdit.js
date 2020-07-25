import React from "react";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";
import Product from "../components/Product";
import ProductFrom from "../components/ProductsFrom";
import api from "../api";
import PageLoading from "../components/Loading";
class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      name: "",
      description: "",
      quantity: "",
      warranty: "",
      price: "",
      status: "",
    },
  };
  componentDidMount() {
    this.fetchData();
    console.log("pasa");
  }
  fetchData = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.Products.read(this.props.match.params.badgeId);
      console.log(data);
      let product = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          product = data[key];
        }
      }
      console.log(product.name);
      this.setState({ loading: false, form: product });
    } catch (error) {
      this.setState({ loading: false, form: error });
    }
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      console.log(this.props.match.params.badgeId);
      await api.Products.update(
        this.props.match.params.badgeId,
        this.state.form
      );
      this.setState({ loading: false });
      this.props.history.push("/products");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={header}
            alt="logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Product
                name={this.state.form.name || "NAME"}
                description={this.state.form.description || "DESCRIPTION"}
                quantity={this.state.form.quantity || "QUANTITY"}
                warranty={this.state.form.warranty || "WARRANTY"}
                price={this.state.form.price || "PRICE"}
                status={this.state.form.status || "STATUS"}
                createAt={this.state.form.createAt || "DATE"}
              />
            </div>{" "}
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <ProductFrom
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </React.Fragment>
    );
  }
}
export default BadgeEdit;
