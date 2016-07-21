'use strict'
import React            from 'react';

export default function UserBorrowedList(props) {
    return(
    <div className="list-group">
      <ul>
        {Object.keys(props.list)
          .map(key=>(
            <li
              key={key}>
              <strong>{props.list[key].item_name}</strong> {props.list[key].item_desc}
              <button type="submit">
              Returned</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
 }
