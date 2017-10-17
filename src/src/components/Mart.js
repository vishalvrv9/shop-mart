import React from 'react'
import Button from './button'
import Cart from './Cart'
import Login from './Login'
import axios from 'axios'

class Mart extends React.Component{
  constructor(props){
    super(props)
    this.addValue = this.addValue.bind(this)
    this.deductValue = this.deductValue.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.proceedFunction= this.proceedFunction.bind(this)
    this.state = {
      data : {items : []},
      proceedToCart: false,
      logout: false,
      readyToMap : false
    }
  }

  logOut() {
    return (
      this.setState({ logout: true })
    )
  }
  
  componentWillMount() {
    axios.get('https://api.myjson.com/bins/w2t9t')
      .then((response) => {
        this.setState({ data: response.data })
        
      })
       .then((data) => {this.setState({ readyToMap: true })})
      .catch((error) => {
        console.log(error)
      })
    
  }

  addValue(itemID) {
    
    var updateValue= this.state.data
    updateValue.items[itemID].value= updateValue.items[itemID].value+1
    this.setState({data:updateValue})
  }

  
  deductValue(itemID) {
    var updateValue = this.state.data
    updateValue.items[itemID].value = updateValue.items[itemID].value - 1
    this.setState({ data: updateValue })
  }

  proceedFunction(){
    var flag= false
    this.state.data.items.map((product, index) =>
    {if(product.value>0){
      flag=true
    this.setState({proceedToCart:true})}
    })
    if(flag===false) 
      alert("Please select at least one product to proceed")
    }
  
  renderItem () {
    return (
     <div className="container-fluid">{
            this.state.data.items.map((product, index) =>
            <div className="row">
                  <div className="col-sm-3">
                    <h2>{product.name}</h2>
                  </div>
                  <div className="col-sm-3">
              <h2>Rs. {product.cost}</h2>
                  </div> 
                  <div className="col-sm-3"><h2>
                    <Button MinusButton ButtonFunction={() => this.deductValue(product.id)} />
                      {product.value}
                    <Button ButtonFunction={() => this.addValue(product.id)} /></h2>
                  </div> 
                  <div className="col-sm-3">
                    <h2>Rs.{product.cost*product.value} </h2>
                  </div>
            </div>)
     }   
        </div>
    )
      
  }

  render(){
    return (
      <div>
        {this.state.readyToMap ?
        this.state.logout? <Login/>:
        this.state.proceedToCart ? 
        <Cart data = {this.state.data} name={this.props.name} addValue={this.addValue} deductValue={this.deductValue}/>
        :
        <div>
              <div className="panel panel-default"  style={{ color: '#0000FC' }}>
                <div className="panel-body"><h3>Hi {this.props.name}! Please select products here</h3>
                <button type="button" className="btn btn-default" onClick={this.logOut.bind(this)}>Logout</button>
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
         {this.renderItem()}
          <div className="container-fluid">
            <button type="button" className="btn btn-default" onClick={this.proceedFunction.bind(this)}>Proceed to Cart</button>
          </div>
        </div>
          : <div className="container-fluid"><h1>Breathe in... Breathe out</h1></div> }
      </div>
    )
  }
}
export default Mart

