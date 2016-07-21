'use strict'
import React            from 'react';

export default function ItemList(props) {

  return(
    <div className="list-group">
    <h2> Available Items Near You </h2>
    {console.log(props.list)}
    <ul>
      {Object.keys(props.list)
        .map(key=>(
          <li key={key}>
            <strong>{props.list[key].item_name}</strong> {props.list[key].item_desc}
            <button
              type="button"
              key={key}>
              borrow this!
            </button>
          </li>
        ))
      }
    </ul>

    </div>
  )
}
