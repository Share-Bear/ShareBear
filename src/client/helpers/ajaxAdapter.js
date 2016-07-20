'use strict'

const ajaxAdapter ={
  getItems(){
    return fetch('/items')
      .then( r => r.json())
  },
}

export default ajaxAdapter;
