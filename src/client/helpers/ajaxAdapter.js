'use strict'

const ajaxAdapter ={
  getItems(){
    return fetch('/items')
      .then( r => r.json())
  },
  getItemsByZip(item){
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
  borrowItem(item, user){
    return fetch(`/items/${item}/borrow`, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({user: user})
    }).then( r=> r.json() )
  },
  returnItem(item){
    return fetch(`/items/${item}/return`,{
      method: 'PUT',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then( r=> {
      console.log(r)
      r.json()
    })
  },
  addNewItem(item){
    console.log("AJAX LISTENED")
    console.log('this is the object received by AJAX', item.name, item.desc, item.owner)
    return fetch(`/items/new`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body : JSON.stringify({
        item_name: item.name,
        item_desc: item.desc,
        owner_id: item.owner})
      }).then( r=> {

        console.log(r)
        r.json()
    })
  },
  updateItem(item, name, desc){
    return fetch(`/items/${item}`, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body : JSON.stringify({
        item_name: name,
        item_desc: desc})
      }).then( r=> {
        console.log(r)
        r.json()
    })
  }

}
export default ajaxAdapter;
