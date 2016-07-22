import React            from 'react';

export default class Edit extends React.Component{
  handleSubmit(event){
    event.preventDefault()
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder={this.props.items.item_name} />
          <input type="text" placeholder={this.props.items.item_desc}/>
          <button type='submit'>EDIT ITEM</button>
        </form>
      </div>
    )
  }
}
