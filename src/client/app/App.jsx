// import the libs we need
import React            from 'react'
import ReactDOM         from 'react-dom'

import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
import ItemList         from './ItemList.jsx'
import ZipCode          from './ZipCode.jsx'
import UserOwnedList    from './Ownedlist.jsx'


// create a React Component called _App_
export default class App extends React.Component{
  constructor(){
    super();

    this.state = {
      user: 1,
      zip: 11233,
      localItems: {},
      ownedItems: {},
    }
  }
  componentDidMount(){
    var here= this
    function currentUserItems(item){
      return item.owner_id === here.state.user
    }
    ajax.getItems().then( data=>{

      this.setState({localItems: data.indexByKey('item_id')})
      var filteredData =data.filter(currentUserItems)
      this.setState({ownedItems: filteredData})
    })
  }
  getLocalItems(event){
    var here= this
    function filterForZip(item){
      return item.zipcode === here.state.zip
    }
    event.preventDefault()
    ajax.getItems().then( data=>{
      console.log(here.state.zip)
      var localStuff = data.filter(filterForZip)
      this.setState({localItems: localStuff})
    })

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
        <ZipCode onSubmitSearch={this.getLocalItems.bind(this)} />
        <ItemList list={this.state.localItems}/>
        <UserOwnedList list={this.state.ownedItems} />
      </container>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
