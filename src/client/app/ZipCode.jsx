'use strict'
 import React            from 'react';

// export default function(props){
//   const handleSubmit = event=>{
//     event.preventDefault();
//     const newZip = zip: event.target.elements.zip_name;
//     props.addZip(newZip);
//     event.target.reset()
//   }
//     return(
//       <div>
//         <form action="" onSubmit={this.props.onSubmitSearch}>
//           <input type="text" placeholder="ZIP CODE" name="zip_name" value={this.props.zip} />
//           <button type="submit"> Search </button>
//         </form>
//       </div>
//     )
// }




// 'use strict'
//  import React            from 'react';

 export default class ZipCode extends React.Component{
  render(){
    return(
      <div>
        <form action="" onSubmit={this.props.zip}>
          <input type="text" placeholder="ZIP CODE" name="zip_name"/>
          <button className ="btn btn-primary" type="submit"> Search </button>
        </form>
      </div>
    )
  }
 }
