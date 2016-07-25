import React from 'react';
import { Button } from 'react-bootstrap';
import ajax              from '../helpers/ajaxAdapter.js';


require

export default class TopBar extends React.Component{
  constructor(){

    super();

    this.state= {
      showModal: false,
      user: ''
    };

  }
  clearLocalStorage(event){
  event.preventDefault()
  localStorage.setItem('token','')
  localStorage.setItem('user','')
  }
  render() {
    let userNav;

    if(this.props.currentUser){
      userNav=(
        <Button type="submit" className="right logout-btn" onClick= {this.props.clearLocalStorage} >Logout</Button>
      )
    } else {
      userNav =(
          <form onSubmit = {this.props.handleLogin} className="login-form">
            <div className = "login-input col-xs-2">
              <input type="text" className="form-control inputdefault" name="email" placeholder="Email" />
            </div>
            <div className = "login-input col-xs-2">
              <input type="password" className="form-control inputdefault col-xs-2" name="password_digest" placeholder="password" />
            </div>
            <Button type="submit" className="logout-btn">Submit</Button>
          </form>
      )
    }
    return (
      <div className = "navbar navbar-default">
        {userNav}
      </div>
    )
  }
}
