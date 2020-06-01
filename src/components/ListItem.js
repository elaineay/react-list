import React from 'react';
import { connect } from 'react-redux';
import 

class ListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            text: item 
            // TODO: bring in the item info from input
        }
    }
    
    onClickAdd = (input) => {
        // TODO: pass state input item into ListItem
    }

    render() {
        return (
            <ul> {this.state.text}
            </ul>
        )
    }
}

export default connect() (ListItem);