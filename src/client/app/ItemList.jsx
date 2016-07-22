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
          <li className="list-group-item">
            <strong>{props.list[key].item_name}</strong> {props.list[key].item_desc}
            <button className="btn btn-info"
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
