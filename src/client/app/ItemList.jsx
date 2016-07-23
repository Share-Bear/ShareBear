'use strict'
import React              from 'react';
import {Accordion, Panel} from 'react-bootstrap';
export default function ItemList(props) {

  return(
    <div>
      <h2> Available Items Near You </h2>
      {Object.keys(props.list)
          .map(key=>(
          <Accordion className="itemListAc">
            <Panel header={props.list[key].item_name} key={key}>
              {props.list[key].item_desc}
              <button className="borrow btn btn-info"
                    type="button"
                    key={key}
                    onClick={props.onSubmitBorrow}
                    value={props.list[key].item_id}>
                    borrow this!
              </button>
            </Panel>
          </Accordion>
          ))
      }

    </div>
  )
}
