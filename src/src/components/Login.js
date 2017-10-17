import React from 'react'
import creds from './creds'
import Mart from './Mart'


class Login extends React.Component{
  constructor(props)
    {
      super(props)
      this.state={uname:'', password: '', nameUser:'', login: false}
    }
    

        onChangeUsername(event){
          this.setState({uname:event.target.value})
        
        }


        onChangePassword(event) 
        {
          this.setState({ password: event.target.value })
        
        }


        authorize()
        {
          let checklogin=false
          if(this.state.uname === creds.name && this.state.password === creds.pass) 
            checklogin=true
            this.setState({login:checklogin})
            this.setState({nameUser: creds.fullname})
    
        }
        // componentWillMount() {
        //   axios.get('https://api.myjson.com/bins/15i3s1')
        //     .then((response) => {
        //       this.setState({ data: response.data })

        //       console.log(this.state.data.items[0].name)
        //     })
        //     .then((data) => this.setState({ readyToMap: true }))
        //     .catch((error) => {
        //       console.log(error)
        //     })
        // }
  
  render()
    {
      return(
      <div className="container-fluid">
        {
          this.state.login ?
            <Mart name={this.state.nameUser}/>
            : 
            <div className="container-fluid">
                 <h3>Shopping Mart</h3>
                <p>
                    This a sample shopping mart on the outlines of e-commerce websites and apps.
                    User first logs into the app and then selects items from the list displayed.
                    User can modify his order once he reaches his cart. After modifying the user
                    is routed to the check-out page. Here the user cannot modify his order, just a
                    confirmation is taken from the user about his order. The invoice is then
                    generated for the orders.
                </p>
        
                    <div>
                      <label><b>Username  : </b></label>
                      <input type="text" onChange={this.onChangeUsername.bind(this)} placeholder="Enter Username" id="inputUsername" required />
                    </div>
                    <div>
                      <label><b>Password  : </b></label>
                      <input type="password" onChange={this.onChangePassword.bind(this)} placeholder="Enter Password" id="inputPassword" required />
                    </div>
                    <div><input type="checkbox" /> Remember me</div>
                    <div>
                    <button type="button" className="btn btn-default" onClick={this.authorize.bind(this)} aria-label="Left Align">
                      Log in
                    </button>
                    </div>
            </div>

        
        }
      </div>
      )
    }

}


export default Login