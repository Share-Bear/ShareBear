// import the libs we need
import React            from 'react'
import ReactDOM         from 'react-dom'

import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
import ItemList         from './ItemList.jsx'
import UserOwnedList    from './Ownedlist.jsx'


// create a React Component called _App_
export default class App extends React.Component{
  constructor(){
    super();

    this.state = {
      user: 1,
      zip: 10025,
      items: {},
      ownedItems: {},
    }
  }
  componentDidMount(){
    var here= this
    function currentUserItems(item){
      return item.owner_id === here.state.user
    }
    ajax.getItems().then( data=>{
      this.setState({items: data.indexByKey('item_id')})
      var filteredData =data.filter(currentUserItems)
      console.log(filteredData)
      this.setState({ownedItems: filteredData})
    })
  }
  addItems(newItem){
    ajax.addItem(newItem)
      .then(data=>{
        this.state.items[ data.item_id ] = data
        this.setState({items: this.state.items})
      })
  }

  whichUser(user){
    console.log(this.state.user)
    var here= this
    console.log(here.state.user)
    function currentUserItems(item){

      return item.owner_id === here.state.user
    }
    ajax.getItems().then( data=>{
      console.log(data)
      var filteredData =data.filter(currentUserItems)
      })
  }

  render(){
    return (
      <container>
        <h1> Welcome to ShareBear! </h1>
        <ItemList list={this.state.items}/>
        <UserOwnedList list={this.state.ownedItems} />
      </container>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
