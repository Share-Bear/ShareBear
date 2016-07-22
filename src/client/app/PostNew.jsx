'use strict'

import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export default class PostNew extends React.Component{
  constructor(){

    super();

    this.state= {
      showModal: false
    };

  }

  close() {
    console.log(this)
    this.setState({ showModal: false });
  }

  open() {

    this.setState({ showModal: true });
  }
  render(){
    return(
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
        >
          Post a New Item!
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title> Make a New Posting </Modal.Title>
          </Modal.Header>
          <h1> Do the Stuff Below Please Thanks Very Much </h1>
          <Button onClick={this.close.bind(this)}>Close</Button>
        </Modal>


    </div>
    )
  }
}
