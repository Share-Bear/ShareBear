'use strict'
import React            from 'react';

export default function UserOwnedList(props) {
  return(
    <div className="list-group">
    <h2>I OWN THIS STUFF</h2>
      <ul>
        {Object.keys(props.list)
          .map(key=>(
            <li
              key={key}>
              <strong>{props.list[key].item_name}</strong> {props.list[key].item_desc}
               <button className="btn btn-warning"type="submit" onClick={props.onSubmitDelete} value={props.list[key].item_id}>
              Delete</button> <button className="btn btn-secondary" type="submit">
              Edit</button>
            </li>
          ))
        }
      </ul>

    </div>
  )
}
