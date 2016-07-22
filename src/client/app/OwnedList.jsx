'use strict'
import React            from 'react';
import Edit             from './EditButton.jsx'
export default class UserOwnedList extends React.Component{
  render(){
    return(
      <div className="list-group">
      <h2>I OWN THIS STUFF</h2>
      {console.log(this.props.list)}
        <ul>
          {Object.keys(this.props.list)
            .map(key=>(
              <li
                key={key}>
                <strong>{this.props.list[key].item_name}</strong> {this.props.list[key].item_desc}
                 <button type="submit" onClick={this.props.onSubmitDelete} value={this.props.list[key].item_id}>
                Delete</button> <button type="submit">
                Edit</button>
                <Edit items={this.props.list[key]} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

