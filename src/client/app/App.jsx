// import the libs we need
import React            from 'react'
import ReactDOM         from 'react-dom'

import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'


// create a React Component called _App_
export default class App extends React.Component{
  constructor(){
    super();

    this.state = {
      user:"",
      zip: 10025,
      items: {}
    }
  }
  componentDidMount(){
    ajax.getItems().then( data=>
      this.setState({items: data.indexByKey('items_id')})
    )
  }
  addItems(newItem){
    ajax.addItem(newItem)
      .then(data=>{
        this.state.items[ data.item_id ] = data
        this.setState({tasks: this.state.items})
      })
  }
  render(){
    return (
      <h1> Welcome to ShareBear! </h1>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
