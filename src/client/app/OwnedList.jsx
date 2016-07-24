'use strict'
import React            from 'react';
import Edit             from './EditButton.jsx'

export default class UserOwnedList extends React.Component{
  render(){
    return(
      <div className="list-group">
      <h2>Items You've Posted</h2>
        <ul>
          {Object.keys(this.props.list)
            .map(key=>(
              <Panel key={key} className="my-thing">
                <span>{this.props.list[key].item_name}</span>
                <Edit items={this.props.list[key]} handleEdit={this.props.edit} />
                <button type="submit" onClick={this.props.onSubmitDelete} className="btn-xs btn-danger" value={this.props.list[key].item_id}>
                Delete</button>

              </Panel>
            ))
          }
        </ul>
      </div>
    )
  }
}

