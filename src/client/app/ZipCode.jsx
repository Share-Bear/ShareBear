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


  <form className="form-inline" action="" onSubmit={this.props.zip}>
  <div className="form-group">
    <label for="zip">ZipCode</label>
    <input type="text" className="form-control" name="zip_name" placeholder="enter zip code" />
  <button type="submit" className="btn btn-primary">Search</button>
  </div>
  </form>



    )
  }
 }
