import React, { Component } from "react";
import AddTodo from "./AddTodo.js";
import TodoItem from "./TodoItem.js";

class TodoList extends Component {
  state = {
    todos: [
      {
        id: 0,
        todo: "Static data"
      }
    ],
    nextId: 1
  };

  handleAddTodo = option => {
    let todos = [...this.state.todos];
    if (!option) {
      return "Enter a value to add a todo item";  
    }
    console.log(this.state.todos);

    todos.push({ id: this.state.nextId, todo: option });
    this.setState({
      todos: todos,
      id: ++this.state.nextId
    });
  };

  handleRemoveTodo = itemToRemove => {
    this.setState((prevState) => ({
        //Only objects which do not match criteria will be returned back as a new array
        todos: prevState.todos.filter(item => {
            return item.id !== itemToRemove
        })
    }))
  };

  render() {
    return (
      <div className="App">
        <AddTodo />
        <AddTodo todoText="" handleAddTodo={this.handleAddTodo} />
        <ul>
          {this.state.todos.map(item => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                id={item.id}
                handleRemoveTodo={this.handleRemoveTodo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
