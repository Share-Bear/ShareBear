'use strict'
 import React            from 'react';

 export default class ZipCode extends React.Component{
  render(){
    return(
    <form className="formHorizontal" action="" onSubmit={this.props.zip}>
    <div className="form-group">
      <label for="zip"> <span className="glyphicon glyphicon-star" aria-hidden="true"></span><h3>share with your community!</h3></label><br />
      <input type="text" className="form-control" name="zip_name" placeholder="enter your zip" />
      <button type="submit" className="zip-btn btn">Search</button>
    </div>
    </form>
    )
  }
 }
