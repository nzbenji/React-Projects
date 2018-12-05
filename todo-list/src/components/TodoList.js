import React, { Component } from 'react';
import AddTodo from './AddTodo.js';
import TodoItem from './TodoItem.js';

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

  handleRemoveTodo = (id) => {
      console.log('remove', id)
  }

  render() {
    return (
      <div className="App">
        <AddTodo />
        <AddTodo todoText="" handleAddTodo= { this.handleAddTodo } />
        <ul>
            { this.state.todos.map((item) => {
                return  <TodoItem key = { item.id } 
                item = { item } 
                id = {item.id} 
                handleRemoveTodo = { this.handleRemoveTodo }
                />
            })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
