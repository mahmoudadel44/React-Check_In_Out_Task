import React, { Component } from "react";
import {Link,Redirect} from 'react-router-dom' 
import history from '../history';
const userInfo={
  email:'admin@admin.com',
   password:'password',
}
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
    };
  }
handleSubmit=(e)=>{
  e.preventDefault();
  if(userInfo.email===this.state.email && userInfo.password===this.state.password&&this.state.password.length>=8){
    this.props.history.push("/Attendence")
}
else {
alert(' pleasse enter validate data')
}
  }
  render() {

    return (
      <section className="text-center">
      <div className="fields">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="m-5">Log in</h2>
        <form role="form" className="text-center m-5" onSubmit={this.handleSubmit}>
          <div className=""> 
     
        <div className="form-group">
          <label style={{marginRight:'450px'}} className="label">Email</label><br/>
          <input type="email" className="Email" placeholder="email"
          onChange={(e)=>this.setState({email:e.target.value})} />
        </div>              
        <div className="form-group">
        <label style={{marginRight:'420px'}} className="label">Password</label><br/>
          <input type="text" className="Password" placeholder="password"
           onChange={e=>this.setState({password:e.target.value})}/>
        </div>                    
      </div>
          <button type="submit" className="myBtn btn btn-primary btn-lg">Log in</button>  
        </form>
        </div>
    </div>
  </div>
  </div>
    </section>
    
    )
  }
}
export default Login;

