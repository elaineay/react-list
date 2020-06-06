import React from "react";
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import * as actions from '../actions/index.js';
import { connect } from 'react-redux';
import './ListFull.css';

class ListFull extends React.Component {
  state = {
    input: {
      text: ""
    },
    curr: ""
  }

  render() {
    return (
      <div className="listFull">
        <h1>My Todo List</h1>
        <form>
          <input id = "formInput" type="text"
          onChange = {this.onChangeEvent} value = {this.state.input.text}/>

          <input type = "submit" value = "Add Item" onClick = {this.onAdd}/>
        </form>

        <ul id = "listItems">
          { this.props.inputs.map ( item => (
            <li key = {item.id} onClick = {() =>this.expandItem(item)}>
              {item.text}
              <span className="delete" onClick={() =>
                this.deleteItem(item)}> [Delete Item] </span></li>
          ))}
          </ul>

          <h3>More Information:</h3>
          <ListItem curr = {this.state.curr}></ListItem>
      </div>
    )
  }

  onAdd = event => {
    event.preventDefault();
    this.props.dispatch(actions.addItem(this.state.input));
    const item = { id: this.state.input.id, text: this.state.input.text };
    this.setState({item});
  }

  deleteItem(input) {
    this.props.dispatch(actions.deleteItem(input.id));
  }

  expandItem = input => {
    const curr = input.text;
    this.setState({curr});
  }

  onChangeEvent = event => {
    const input = {
      ...this.state.input,
      text: event.target.value
    };
    this.setState({input});
  }
}

ListFull.propTypes = {
  dispatch: PropTypes.func.isRequired,
  inputs: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {inputs: state.input};
}

export default connect(mapStateToProps)(ListFull);