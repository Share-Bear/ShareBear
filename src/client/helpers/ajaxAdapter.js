'use strict'

const ajaxAdapter ={
  getItems(){
    return fetch('/items')
      .then( r => r.json())
  },
  getItemsByZip(item){
    console.log("ajax get items works")
    return fetch(`/items/zip/${item}`)
      .then(r => r.json())
  },
  getOwnedItems(user){
    return fetch(`/users/${user}/own`)
        .then(r => r.json())
  },
  getBorrowedItems(user){
    return fetch(`/users/${user}/borrow`)
        .then(r => r.json())
  }
}
export default ajaxAdapter;
