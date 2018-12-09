import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
