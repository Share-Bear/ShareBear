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
  },
  addNewUser(user){
    console.log('hello')
    return fetch(`/users/new`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body : JSON.stringify({
        user_name: user.user_name,
        email: user.email,
        password: user.password,
        address: user.address,
        zipcode: user.zipcode})
      }).then( r=> {
        console.log(r)
        r.json()
    })
  },
  loginUser(user){
    return fetch(`/users/authenticate/:id`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body : JSON.stringify({
        email: user.email,
        password: user.password_digest})
      }).then( r=> {
        localStorage.setItem('token', r.token)
        console.log(r)
        r.json()
    })
  }

}
export default ajaxAdapter;
