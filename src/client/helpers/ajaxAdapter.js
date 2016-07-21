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
  }
}

export default ajaxAdapter;
