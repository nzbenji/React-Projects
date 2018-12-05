import React, { Component } from 'react';
import AddTodo from './AddTodo.js';

class TodoList extends Component {
  state = {
    todos: [
      {
        id: 0,
        todo: "make dinner"
      },
      {
        id: 1,
        todo: "wash dishes"
      }
    ],
    selectedTodo: undefined
  }

  handleAddTodo = (option) => {
    console.log('todo added', option)
  }

  render() {
    return (
      <div className="App">
        <AddTodo />
        <AddTodo todoText="" handleAddTodo= { this.handleAddTodo } />
      </div>
    );
  }
}

export default TodoList;
