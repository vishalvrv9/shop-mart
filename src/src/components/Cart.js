import React from "react"
import Button from "./button"
import Checkout from "./Checkout"
import Login from "./Login"

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.cartItems = this.cartItems.bind(this)
    this.state = {
      checkout: false,
      logout: false
    }
  }

  logOut() {
    return this.setState({ logout: true })
  }

  checkoutFunction() {
    return this.setState({ checkout: true })
  }

  cartItems() {
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
                  <h2>
                    <Button MinusButton ButtonFunction={() => this.props.deductValue(product.id)}/>
                    {product.value}
                    <Button ButtonFunction={() => this.props.addValue(product.id)}/>
                  </h2>
                </div>
                <div className="col-sm-3">
                  <h2>Rs.{product.cost * product.value} </h2>
                </div>
              </div>
            ) : null
        )}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.logout ? (
          <Login />
        ) : this.state.checkout ? (
          <Checkout data={this.props.data} name={this.props.name} />
        ) : (
          <div>
            <div className="panel panel-default">
              <div className="panel-body">
                <h3> hey {this.props.name}! Review your order...</h3>
                <button type="button" className="btn btn-default" onClick={this.logOut.bind(this)}>
                  Logout
                </button>
              </div>
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
            </div>
            {this.cartItems()}
            <div className="container-fluid">
              <button type="button" className="btn btn-default" onClick={this.checkoutFunction.bind(this)}>
              Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Cart
