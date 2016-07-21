'use strict'
 import React            from 'react';

 export default function ZipCode(props) {

  return(
    <div>
      <form action="" onSubmit={this.props.onSubmitSearch}>
        <input type="text" placeholder="ZIP CODE" value={this.props.zip} />
        <button type="submit"> Search </button>
      </form>
    </div>
  )
 }
