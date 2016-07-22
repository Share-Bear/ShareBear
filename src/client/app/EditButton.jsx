import React            from 'react';
import ajax             from '../helpers/ajaxAdapter.js'
export default class Edit extends React.Component{
  constructor(){
    super();

    this.state = {
      name: '',
      desc: '',
      id: ''
    }
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
  }
  handleChangeTwo(event){
    this.setState({
      desc: event.target.value
    })
  }
  handleEditTwo(event){
    var here= this
    event.preventDefault()
    ajax.updateItem(here.state.id, here.state.name, here.state.desc)
      .then(data=>{
        console.log('changed')
      })
    this.props.handleEdit()
  }

  render(){
    return(
      <div>
        <form  onSubmit={this.handleEditTwo.bind(this)}>

          <input type="text" placeholder={this.props.items.item_name} onChange={this.handleChange.bind(this)} value={this.state.name}/>

          <input type="text" placeholder={this.props.items.item_desc} onChange={this.handleChangeTwo.bind(this)} value={this.state.desc}/>

          <button type='submit'>EDIT ITEM</button>
        </form>
      </div>
    )
  }
}
