import React from "react";
import "../css/TodoItem.css";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }
  handleRemoveTodo(id) {
    this.props.handleRemoveTodo(id);
  }

  // handleRemoveTodo = id => {
  //     this.props.handleRemoveTodo(id)
  // }

  render() {
    return (
      <div className="container">
      {this.props.item.todo}
        <button
          className="remove__item"
          onClick={e => this.handleRemoveTodo(this.props.id)}
        >
          Remove
        </button>
        
      </div>
    );
  }
}
