import React from 'react';
import '../css/AddTodo.css';

export default class AddTodo extends React.Component {

    state = {
        input: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ input: e.target.value })
    }

    addTodo = (todo) => {
        if(todo.length > 1){
            this.props.handleAddTodo(todo)
            this.setState({ input: '' })
        }
        
    }

    render() {
        return (
            <div>
                <input className="search__field" type="text" value={this.state.input} onChange={this.handleChange}/>
                <button className="search__btn" onClick={ () => this.addTodo(this.state.input)}>
                    Submit
                </button>
            </div>
        )
    }
}