'use strict'
import React              from 'react';
import {Accordion, Panel, PanelGroup, Button} from 'react-bootstrap';


export default class ItemList extends React.Component{
  constructor(){

    super();

    this.state= {
      open:false
    };

  }
  handleClick(event){
     event.preventDefault();
     this.setState({ open: !this.state.open })
  }
  render(){
    return (
      <div>
      <Panel collapsible
        expanded={this.state.open}
        header={
          <Button onClick={this.handleClick.bind(this)}>
            {this.props.item_name}
          </Button>
        }
      >
      {this.props.item_desc}
      </Panel>
      </div>
    )
  }

}


// export default function ItemList(props) {

//   return(
//     <div>
//       <h2> Things Near You </h2>
//       {Object.keys(props.list)
//           .map(key=>(
//             <PanelGroup collapsible accordion>
//             <Panel header={props.list[key].item_name} key={key} >
//               {props.list[key].item_desc}
//               <button className="borrow btn btn-info"
//                     type="button"
//                     key={key}
//                     onClick={props.onSubmitBorrow}
//                     value={props.list[key].item_id}>
//                     borrow this!
//               </button>
//             </Panel>
//             </PanelGroup>

//           ))
//       }

//     </div>
//   )
// }
