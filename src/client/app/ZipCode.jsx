'use strict'
 import React            from 'react';

 export default class ZipCode extends React.Component{
  render(){
    return(
    <form className="form-inline" action="" onSubmit={this.props.zip}>
    <div className="form-group">
      <label for="zip">ZipCode</label>
      <input type="text" className="form-control" name="zip_name" placeholder="enter zip code" />
      <button type="submit" className="btn btn-primary">Search</button>
    </div>
    </form>
    )
  }
 }
