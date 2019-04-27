import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import RegisterForm from '../components/registerform'

class Infopage extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirecttohome : false
    }
  }
  redirect = () => {
    this.setState({
      redirecttohome : true
    })
  }
  render() {
    if(this.state.redirecttohome === true){
      return <Redirect to='/home'/>
    }
    return (
      <div className="register-page">
        <RegisterForm redirect={this.redirect}/>
      </div>
    );
  }
}

export default Infopage;
