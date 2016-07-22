// import the libs we need
import React            from 'react'
import ReactDOM         from 'react-dom'
import ajax             from '../helpers/ajaxAdapter.js'
import util             from '../helpers/util.js'
import ItemList         from './ItemList.jsx'
import ZipCode          from './ZipCode.jsx'
import UserOwnedList    from './Ownedlist.jsx'
import UserBorrowedList    from './Borrowedlist.jsx'
import Footer    from './Footer.jsx'
// import JumboTron          from './Jumbotron.jsx'

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
    const here = this;
    console.log('mounte')
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
    ajax.addItem(newItem)
      .then(data=>{
        this.state.localItems[ data.item_id ] = data
        this.setState({localItems: this.state.localItems})
      })
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

  handleEditButton(event){
    event.preventDefault();
    this.setState({ownedItems: {}})
    ajax.getOwnedItems(this.state.user).then(data=>{
      console.log('yooooo')
      this.setState({ownedItems: data.indexByKey('item_id')})
    })
  }

  render(){
    return (
<container className="">
  <div className="jumbotron">
    <h1>Welcome to ShareBear!</h1>
  </div>
  <div className="outer">
    <ZipCode zip={this.updateZip.bind(this)} />
    <ItemList list={this.state.localItems} onSubmitBorrow= {this.onSubmitBorrow.bind(this)}/>
    <UserOwnedList list={this.state.ownedItems} onSubmitDelete= {this.onSubmitDelete.bind(this)} edit={this.handleEditButton.bind(this)} />
    <UserBorrowedList list={this.state.borrowedItems} onSubmitReturn= {this.onSubmitReturn.bind(this)} />
  </div>
  <Footer />
</container>
    )
  }
}

// mount our App at #container
ReactDOM.render(<App />, document.querySelector('#container'))
