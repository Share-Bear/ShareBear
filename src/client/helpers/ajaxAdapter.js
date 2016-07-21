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
  },
  deleteItem(item){
    return fetch(`/items/${item}`,{
      method: 'DELETE',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then( r=> r.json() )
  },
  returnItem(item){
    return fetch(`/items/${item}`,{
      method: 'PUT',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then( r=> r.json() )
  }

}
export default ajaxAdapter;
