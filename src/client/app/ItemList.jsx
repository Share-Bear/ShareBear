'use strict'
import React            from 'react';

export default function TaskList(props) {

  return(
    <div className="list-group">
    {console.log(props.list)}
      {Object.keys(props.list)
        .map(key=>(
          <button
            type="button"
            className="list-group-item"
            key={key}>
            <strong>{props.list[key].item_name}</strong> {props.list[key].item_desc}
          </button>
        ))
      }

    </div>
  )
}
