import React from "react";
import Mart from "./Mart";
import Login from "./Login";
class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      logout: false,
      placeNewOrder: false
    };
  }

  newOrder() {
    return this.setState({ placeNewOrder: true });
  }

  logOut() {
    return this.setState({ logout: true });
  }
  calculateBill() {
    var totalBill = 0;
    this.props.data.items.map(
      (product, index) =>
        product.value > 0
          ? (totalBill = totalBill + product.value * product.cost)
          : null
    );
    return totalBill;
  }

  renderItem() {
    return (
      <div className="container-fluid">
        {this.props.data.items.map(
          (product, index) =>
            product.value > 0 ? (
              <div className="row">
                <div className="col-sm-3">
                  <h2>{product.name}</h2>
                </div>
                <div className="col-sm-3">
                  <h2>Rs. {product.cost}</h2>
                </div>

                <div className="col-sm-3">
                  <h2>{product.value}</h2>
                </div>
                <div className="col-sm-3">
                  <h2>Rs.{product.cost * product.value} </h2>
                </div>
              </div>
            ) : null
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.logout ? (<Login />)
         : this.state.placeNewOrder ? (<Mart name={this.props.name} />)
          : (
          <div className="container-fluid">
            <div>
              <h3>Hi {this.props.name}! Thank you for shopping with us.</h3>
            </div>
            <div className="container-fluid">
              <div className="col-sm-3">
                <h1>Product name</h1>
              </div>

              <div className="col-sm-3">
                <h1>Price</h1>
              </div>
              <div className="col-sm-3">
                <h1>Quantity</h1>
              </div>
              <div className="col-sm-3">
                <h1>Gross Amount</h1>
              </div>
              {this.renderItem()}
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3>Your Bill for the order: Rs.{this.calculateBill()}</h3>
                </div>
              </div>
              <div className="col-sm-9">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={this.newOrder.bind(this)}>
                  Place new order
                </button>
              </div>
              <div className="col-sm-3">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={this.logOut.bind(this)} >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Checkout;
