// import the libs we need
import React            from 'react'
import ReactDOM         from 'react-dom'
import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
import ItemList         from './ItemList.jsx'
import ZipCode          from './ZipCode.jsx'
import UserOwnedList    from './Ownedlist.jsx'
import UserBorrowedList from './Borrowedlist.jsx'
import PostNew          from './PostNew.jsx'
import Footer           from './Footer.jsx'
import Topbar           from './Topbar.jsx'
import SignUp           from './SignUp.jsx'
import {Grid, Row, Col } from 'react-bootstrap';
// import { Grid, Row, Col } from 'react-bootstrap';
// import JumboTron          from './Jumbotron.jsx'

// create a React Component called _App_
export default class App extends React.Component{
  constructor(){
    super();

    this.state = {
      user: '',
      zip: 11230,
      localItems: {},
      ownedItems: {},
      borrowedItems:{}
    }
  }

  componentDidMount(){
    const here = this;
    ajax.getBorrowedItems(this.state.user).then(data=>{
      this.setState({borrowedItems: data.indexByKey('item_id')})
    })
    ajax.getItems().then( data=>{
      function forRightUser(item) {
        return item.owner_id !== here.state.user
      }
      function notBorrowed(item){
        return !item.borrower_id
      }
      var filtered = data.filter(forRightUser).filter(notBorrowed);
      this.setState({localItems: filtered.indexByKey('item_id')})
    })
    ajax.getOwnedItems(this.state.user).then(data=>{
      this.setState({ownedItems: data.indexByKey('item_id')})
    })
  }

  updateZip(event){
    const here = this;
    event.preventDefault();
    let zipNew = event.target.firstChild.value;
    this.setState({zip: zipNew})
    let myZip = this.state.zip;
    let myItems = this.state.localItems;
    ajax.getItemsByZip(myZip)
      .then( data=>{
        function forRightUser(item) {
          return item.owner_id !== here.state.user
        }
        var filtered = data.filter(forRightUser);
        this.setState({localItems: filtered.indexByKey('item_id')})
      })
  }


  addItems(newItem){
    ajax.addNewItem(newItem)
      //  .then(data=>{
      //   this.state.ownedItems[ data.item_id ] = data
      //   this.setState({ownedItems: this.state.ownedItems})
      // })
  }
  addUser(newUser){
    ajax.addNewUser(newUser)
  }

  onSubmitBorrow(event){
    event.preventDefault();
    var item=event.target.value
    ajax.borrowItem(item, this.state.user)
    .then(data=>{
      var moved = (this.state.localItems[ data ]);
      this.state.borrowedItems[moved.item_id] = moved
      delete this.state.localItems[ data ]
      this.setState({localItems: this.state.localItems})
      this.setState({borrowedItems: this.state.borrowedItems})
    })
  }

  onSubmitDelete(event){
    event.preventDefault();
    var item=event.target.value
    ajax.deleteItem(item)
    .then(data=>{
      delete this.state.ownedItems[ item ] ;
      this.setState({ownedItems: this.state.ownedItems})
    })
  }

  onSubmitReturn(event){
    event.preventDefault();
    var item=event.target.value
    console.log(this.state.borrowedItems[ item ])
    ajax.returnItem(item)
    .then(data=>{
      let moved = (this.state.borrowedItems[ item ]);
      this.state.localItems[moved.item_id] = moved
      delete this.state.borrowedItems[ item ] ;
      this.setState({localItems: this.state.localItems})
      this.setState({BorrowedItems: this.state.BorrowedItems})
    })
  }
  render (){
    let userMessage;
    if (this.state.user) {
      userMessage = (
        <PostNew
        addItem={this.addItems.bind(this)}
        currentUser={this.state.user} />
      )
    } else {
      userMessage = (
        <SignUp
        addItem={this.addUser.bind(this)}/>
      )
    }

    return (
      <container className="">
      <Topbar />
      <div className="bigBody">
        <div className="jumbotron">
          <h1>Welcome to ShareBear</h1>
          <div className='post-container'>
            <ZipCode zip={this.updateZip.bind(this)} />
            {console.log(userMessage)}
            {userMessage}
          </div>
        </div>
        <div className="outer">
          <div className="item-list">
          <h1> Things Near You </h1>
            {Object.keys(this.state.localItems)
              .map(key=>(
                <ItemList
                  key={key}
                  item_name={this.state.localItems[key].item_name}
                  item_desc={this.state.localItems[key].item_desc}
                  onSubmitBorrow= {this.onSubmitBorrow.bind(this)}
                />
              ))
            }
          </div>
          <div className="users-things">
            <div className="ownedContainer">
              <UserOwnedList list={this.state.ownedItems} onSubmitDelete= {this.onSubmitDelete.bind(this)}  />
            </div>
            <div className="borrowedContainer">
              <UserBorrowedList list={this.state.borrowedItems} onSubmitReturn= {this.onSubmitReturn.bind(this)} />
            </div>
          </div>
         <Footer />
        </div>
      </div>

      </container>
    )
  }
}

// edit={this.handleEditButton.bind(this)}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
