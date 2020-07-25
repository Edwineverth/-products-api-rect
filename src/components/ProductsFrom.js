import React from "react";
class ProductsFrom extends React.Component {
  handleClick = (e) => {
    console.log("Button was clicked");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };
  /*
name
description
quantity
warranty
price
status
createAt
*/ d;

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="">name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="name"
              value={this.props.formValues.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">description</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="description"
              value={this.props.formValues.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">quantity</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="quantity"
              value={this.props.formValues.quantity}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">warranty</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="warranty"
              value={this.props.formValues.warranty}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">price</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="price"
              value={this.props.formValues.price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">status</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="status"
              value={this.props.formValues.status}
            />
          </div>
          <button
            //type="button"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
          {this.props.error && (
            <div>
              <p className="text-danger">{this.props.error.message}/</p>
            </div>
          )}
        </form>
      </div>
    );
  }
}
export default ProductsFrom;
