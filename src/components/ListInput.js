import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class ListInput extends React.Component {
constructor() {
    super();
}

    render() {
        return (
            <div id='form'>
                <label>
                New Item:
                </label>
                <input id='input' type='text'/>
                
                <button onClick={ListItem.onClickAdd(input)}>
                    Add Item
                </button>
                
                <button onclick={this.onClickClear}>
                Clear List
                </button>
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {item: state.list}
}

export default connect(mapStateToProps, ) (ListInput);