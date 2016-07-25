'use strict'
import React            from 'react';
import {Panel, Button}          from 'react-bootstrap'


export default function UserBorrowedList(props) {
    return(
    <div className="list-group items-container">
    <h2>Items You're Borrowing</h2>
      <div>
        {Object.keys(props.list)
          .map(key=>(
            <Panel key={key} className="my-thing">
              <strong>{props.list[key].item_name}</strong> {props.list[key].item_desc}
              <Button type="submit" className="return-btn btn-xs" onClick={props.onSubmitReturn} value={props.list[key].item_id}>
              Return</Button>
            </Panel>
          ))
        }
      </div>
    </div>
  )
 }
