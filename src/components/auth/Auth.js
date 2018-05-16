import React, { Component } from 'react'
import loginIcon from '../../img/affiliates.png';
import './Auth.css';
/**
 * 
 */
 class AuthUser extends Component {

   constructor(props){
      super(props);
      this.state={
          username:'',
          password:'',
          message:''
      }
   } 

   onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;  
    this.setState(state);
  }

   login=(e) =>{
        e.preventDefault();
        const { username, password} = this.state;
        console.log("username = "+username);
        console.log("password = "+password);
        if("admin"===username && "foo"===password){
            console.log("_@_@_@");
            //forwarding the request to the other component!
            this.props.history.push("/product");
        }else{
            this.setState({message:"Sorry! username and password are not valid!"});
            console.log("##########");
        }
        
   } 

   render() {
    const { username,password} = this.state;
        //defining inline css
            const inlinecss={
                height:"200px"
            }
    return (
      <div className="login">
         <img src={loginIcon} style={inlinecss} alt=""/>
          <hr/>
           <span className="error-message">{this.state.message}</span>
          <hr/>
            <div className="form-group">
            <label forName="email">Usename:</label>
                <input type="text" value={username} className="form-control" name="username" onChange={this.onChange}/>
            </div>   
            <div class="form-group">
                 <label forName="pwd">Password:</label>
                <input type="password" value={password} class="form-control"name="password" onChange={this.onChange}/>
            </div>

            <button type="submit" onClick={this.login} class="btn btn-primary btn-lg">Submit</button>
            <br/><br/><br/><br/><br/><br/>
      </div>
    )
  }
}

export default AuthUser;
