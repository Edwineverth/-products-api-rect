import React from "react";
import "../pages/styles/BadgeDetails.css";
import PageLoading from "../components/Loading";
import PageError from "../components/PageError";
import api from "../api";
import ProductDetails from "./ProductDetails";
class ProductDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.Products.read(this.props.match.params.badgeId);
      console.log(data);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteBadge = async (e) => {
    this.setState({ loading: true, error: null });
    try {
      await api.Products.remove(this.props.match.params.badgeId);
      console.log(this.props.match.params.badgeId);
      this.props.history.push("/products");
      this.setState({ loading: false, error: null });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <ProductDetails
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
      />
    );
  }
}
export default ProductDetailsContainer;
