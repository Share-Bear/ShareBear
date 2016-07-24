import React from 'react';
import { Button } from 'react-bootstrap';


require

export default class Footer extends React.Component{
  constructor(){

    super();

  }
  clearLocalStorage(event){
  localStorage.setItem('token','')
  localStorage.setItem('user','')
  }
  render() {
    return (
      <div className = "navbar navbar-default">
          <Button type="submit" onClick= {this.props.clearLocalStorage} >Logou</Button>
      </div>
    )
  }
}
