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
    this.setState({ showModal: false });
  }

  open() {

    this.setState({ showModal: true });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newItem= {
      name: event.target.elements.item_name.value,
      desc: event.target.elements.item_desc.value,
      owner: event.target.elements.owner_id.value
    }
    console.log('this is the object generated in PostNew.jsx', newItem)
    this.props.addItem(newItem);
  }
  render(){
    return(
      <div>
        <Button
          bsStyle="primary"
          bsSize="block"
          onClick={this.open.bind(this)}
        >
          Post a New Item!
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title> Post an item you'd like to loan!</Modal.Title>
          </Modal.Header>
          <form onSubmit = {this.handleSubmit.bind(this)}>
            <input type="text" className="form-control input-lg" name="item_name" placeholder="Name of Item" />
            <input type="text" className="form-control input-lg" name="item_desc" placeholder="Desc of Item" />
            <input type="text" className="form-control input-lg" name="owner_id" placeholder="User ID" />
            <Button type="submit" onClick={this.close.bind(this)}>Submit</Button>
          </form>
        </Modal>


    </div>
    )
  }
}