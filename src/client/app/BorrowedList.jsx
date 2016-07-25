'use strict'
import React            from 'react';
import {Panel, Button}          from 'react-bootstrap'


export default function UserBorrowedList(props) {
    return(
    <div className="list-group items-container">
    <h2 className="borrow-hdr">Items You're Borrowing</h2>
      <div>
        {Object.keys(props.list)
          .map(key=>(
            <Panel key={key} className="borrowed-thing">
              <strong>{props.list[key].item_name}</strong> {props.list[key].item_desc}
              <button className="borrowed btn btn-info"type="submit" onClick={props.onSubmitReturn} value={props.list[key].item_id}>
              Returned</button>
             </Panel>
          ))
        }
      </div>
    </div>
  )
 }
