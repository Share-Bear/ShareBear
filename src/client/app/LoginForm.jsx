import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import ajax              from '../helpers/ajaxAdapter.js';


export default class LoginForm extends React.Component {
  constructor(){

    super();

    this.state= {
      showModal: false,
      user: ''
    };

  }
  handleSubmit(event) {
     event.preventDefault();
     const newUser= {
       email: event.target.elements.email.value,
       password_digest: event.target.elements.password_digest.value
     }
     ajax.loginUser(newUser).then(data=>{
       console.log('LOGGED IN!')
     })
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {

    this.setState({ showModal: true });
  }

  render(){
    return(
      <div>
        <Button
          className="primary post-new-btn "
          onClick={this.open.bind(this)}
        >
          Login
        </Button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title> Sign up</Modal.Title>
          </Modal.Header>
          <form onSubmit={this.props.handleLogin}>
            <input type="text" className="form-control input-lg" name="email" placeholder="Email" />
            <input type="password" className="form-control input-lg" name="password_digest" placeholder="password" />
            <Button type="submit" onClick={this.close.bind(this)}>Submit</Button>
          </form>
        </Modal>


    </div>
    )
  }
}
