// import the libs we need
import React            from 'react'
import ReactDOM         from 'react-dom'

import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
import ItemList         from './ItemList.jsx'
import ZipCode          from './ZipCode.jsx'


// create a React Component called _App_
export default class App extends React.Component{
  constructor(){
    super();

    this.state = {
      user:"",
      zip: 10025,
      localItems: {}
    }
  }
  componentDidMount(){
    ajax.getItems().then( data=>
      this.setState({localItems: data.indexByKey('item_id')})
    )
  }
  getLocalItems(){
    party=> {console.log("I SEARCHED")}
    // Object.keys(ajax.getItems())
    //   .filter(key=>{return })
  }
  addItems(newItem){
    ajax.addItem(newItem)
      .then(data=>{
        this.state.localItems[ data.item_id ] = data
        this.setState({localItems: this.state.localItems})
      })
  }
  render(){
    return (
      <container>
        <h1> Welcome to ShareBear! </h1>
        <ZipCode onSubmitSearch={getLocalItems} />
        <ItemList list={this.state.localItems}/>
      </container>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
