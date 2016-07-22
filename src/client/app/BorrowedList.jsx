'use strict'
import React            from 'react';

export default function UserBorrowedList(props) {
    return(
    <div className="list-group">
    <h2>I'M BORROWING THIS STUFF</h2>
      <ul>
        {Object.keys(props.list)
          .map(key=>(
            <li
              key={key}>
              <strong>{props.list[key].item_name}</strong> {props.list[key].item_desc}
              <button type="submit" onClick={props.onSubmitReturn} value={props.list[key].item_id}>
              Returned</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
 }
