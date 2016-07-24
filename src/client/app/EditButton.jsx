import React            from 'react';
import ajax             from '../helpers/ajaxAdapter.js'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


export default class Edit extends React.Component{
  constructor(){
    super();

    this.state = {
      name: '',
      desc: '',
      id: '',
      showModal: false
    }
  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }
  componentDidMount(){
    var here=this
    this.setState({
      name: here.props.items.item_name,
      desc: here.props.items.item_desc,
      id: here.props.items.item_id
    })
  }

  handleChange(event){
    this.setState({
      name: event.target.value
    })
    this.props.items.item_name = event.target.value
  }
  handleChangeTwo(event){
    this.setState({
      desc: event.target.value
    })
    this.props.items.item_desc = event.target.value
  }
  handleEditTwo(event){
    event.preventDefault()
    var here= this
    ajax.updateItem(here.state.id, here.state.name, here.state.desc)
      .then(data=>{
      })
  }
  render(){
    return(
      <span className="edit-container">
        <Button
          onClick={this.open.bind(this)}
          className="btn-xs btn-info edit-btn"
        >
          Edit
        </Button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
          <Modal.Title> Edit item </Modal.Title>
            </Modal.Header>
          <form  onSubmit={this.handleEditTwo.bind(this)} >
            <input type="text" placeholder={this.props.items.item_name} onChange={this.handleChange.bind(this)} value={this.state.name}/>

            <input type="text" placeholder={this.props.items.item_desc} onChange={this.handleChangeTwo.bind(this)} value={this.state.desc}/>

            <Button type='submit' className='btn-xs' onClick={this.close.bind(this)}>Edit Item</Button>
          </form>
        </Modal>
      </span>
    )
  }
}
