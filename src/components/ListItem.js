import React from 'react';

class ListItem extends React.Component {

  render() {
    return (
      <div className = "listItem">
        <p>{this.props.curr}</p>
      </div>
    )
  }

}

export default ListItem;