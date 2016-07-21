// import the libs we need
import React            from 'react'
import ReactDOM         from 'react-dom'

import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
import ItemList         from './ItemList.jsx'
import ZipCode          from './ZipCode.jsx'
import UserOwnedList    from './Ownedlist.jsx'
import UserBorrowedList    from './Borrowedlist.jsx'

// create a React Component called _App_
export default class App extends React.Component{
  constructor(){
    super();

    this.state = {
      user: 1,
      zip: 11230,
      localItems: {},
      ownedItems: {},
      borrowedItems:{}
    }
  }
  componentDidMount(){
    ajax.getItems().then( data=>{
      this.setState({localItems: data.indexByKey('item_id')})
    })
    ajax.getOwnedItems(this.state.user).then(data=>{
      this.setState({ownedItems: data})
    })
    ajax.getBorrowedItems(this.state.user).then(data=>{
      this.setState({borrowedItems: data})
    })
  }
  getLocalItems(event){
    event.preventDefault();
    let myZip = this.state.zip;
    let myItems = this.state.localItems;
    ajax.getItemsByZip(myZip)
      .then( data=>{
        console.log(myZip)
        this.setState({localItems: data.indexByKey('item_id')})
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
        <UserBorrowedList list={this.state.borrowedItems} />
      </container>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
