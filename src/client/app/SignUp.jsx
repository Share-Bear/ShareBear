'use strict'

import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import ajax              from '../helpers/ajaxAdapter.js';

export default class PostNew extends React.Component{
  constructor(){

    super();

    this.state= {
      showModal: false
    };

  }

  close() {
    this.setState({ showModal: false });
  }

  open() {

    this.setState({ showModal: true });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newUser= {
      user_name: event.target.elements.user_name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password_digest.value,
      address: event.target.elements.address.value,
      zipcode: event.target.elements.zipcode.value,
    }
    ajax.addNewUser(newUser)
  }
  render(){
    return(
      <div>
        <Button
          className="primary post-new-btn "
          onClick={this.open.bind(this)}
        >
          Sign Up!
        </Button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title> Sign up</Modal.Title>
          </Modal.Header>
          <form onSubmit = {this.handleSubmit.bind(this)}>
            <input type="text" className="form-control input-lg" name="user_name" placeholder="User name" />
            <input type="text" className="form-control input-lg" name="email" placeholder="email" />
            <input type="password" className="form-control input-lg" name="password_digest" placeholder="password" />
            <input type="text" className="form-control input-lg" name="address" placeholder="address" />
            <input type="text" className="form-control input-lg" name="zipcode" placeholder="zipcode" />
            <Button type="submit" onClick={this.close.bind(this)}>Submit</Button>
          </form>
        </Modal>


    </div>
    )
  }
}
