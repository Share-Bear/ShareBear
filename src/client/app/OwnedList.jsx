'use strict'
import React            from 'react';

export default function UserOwnedList(props) {
  return(
    <div className="list-group">
    <h2>I OWN THIS STUFF</h2>
    {console.log(props.list)}
      <ul>
        {Object.keys(props.list)
          .map(key=>(
            <li
              key={key}>
              <strong>{props.list[key].item_name}</strong> {props.list[key].item_desc}
               <button type="submit" onClick={props.onSubmitDelete} value={props.list[key].item_id}>
              Delete</button> <button type="submit">
              Edit</button>
            </li>
          ))
        }
      </ul>

    </div>
  )
}
