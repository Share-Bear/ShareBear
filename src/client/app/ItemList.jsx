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
    let borrowBtn;

    if(this.props.currentUser){
      borrowBtn=(
        <button className="borrow btn btn-info"
              type="button" value={this.props.item.item_id}
              onClick={this.props.onSubmitBorrow}>
              borrow this!
        </button>
      )
    }
    return (
      <Panel collapsible
        expanded={this.state.open}
        className='item-panel'
        header={
          <Button onClick={this.handleClick.bind(this)}>
            {this.props.item.item_name}
          </Button>
        }
      >
      <ul>
        <li><strong> Description: </strong> {this.props.item.item_desc}</li>
        <li><strong> Zipcode: </strong>{this.props.item.zipcode}</li>
        <li><strong> Posted By: </strong>{this.props.item.user_name}</li>
      </ul>
      {borrowBtn}
      </Panel>
    )
  }

                // value={props.list[key].item_id}>


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
