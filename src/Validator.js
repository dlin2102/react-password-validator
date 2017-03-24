import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      validation: ''
    }
  }
  password(e){
    this.setState({password: e.target.value})
  }
  validation(e){
    this.setState({validation: e.target.value})
  }
  validatePassword(){
    if (this.state.password === this.state.validation){
      alert("Validation Granted")
    }else{
      alert("Validation Failed")
    }
  }
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" value={this.state.password} onChange={e => this.password(e)} placeholder="password" />
        <input type="password" value={this.state.validation} onChange={e => this.validation(e)} placeholder="confirm password" />
        <input type="submit" onClick={() => {this.validatePassword()}} value="Submit" />
      </div>
    );
  }
}

export default Validator;
