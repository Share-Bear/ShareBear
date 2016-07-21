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
      zip: 10025,
      localItems: {}
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
      console.log(filteredData)
      this.setState({ownedItems: filteredData})
    })
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
        <UserOwnedList list={this.state.ownedItems} />
      </container>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
