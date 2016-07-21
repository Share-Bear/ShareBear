'use strict'
 import React            from 'react';


 export default class ZipCode extends React.Component{
  render(){
    return(
      <div>
        <form action="" onSubmit={this.props.zip}>
          <input type="text" placeholder="search your zip!" name="zip_name"/>
          <button type="submit"> Search </button>
        </form>
      </div>
    )
  }
 }
