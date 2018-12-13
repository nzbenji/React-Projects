import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    displayValue: '0'
  }
  render() {
    const { displayValue } = this.state
    return (
        <div className="container">
        <div className="display"> { displayValue }</div>

        <div className="buttons">
          <button onClick={this.handleClick} className="btn btn__clear" value="clear">C</button>
          <button onClick={this.handleClick} className="btn btn__operator" value="/">&divide;</button>
          <button onClick={this.handleClick} className="btn btn__operator" value="*">&times;</button>
          <button onClick={this.handleClick} className="btn btn__operator" value="-">-</button>
          

          <button onClick={this.handleClick} className="btn" value="7">7</button>
          <button onClick={this.handleClick} className="btn" value="8">8</button>
          <button onClick={this.handleClick} className="btn" value="9">9</button>
          <button onClick={this.handleClick} className="btn btn__operator" value="+">+</button>
          
          <button onClick={this.handleClick} className="btn" value="4">4</button>
          <button onClick={this.handleClick} className="btn" value="5">5</button>
          <button onClick={this.handleClick} className="btn" value="6">6</button>
          <button onClick={this.handleClick} className="btn btn__decimal" value=".">.</button>

          <button onClick={this.handleClick} className="btn" value="7">1</button>
          <button onClick={this.handleClick} className="btn" value="7">2</button>
          <button onClick={this.handleClick} className="btn" value="7">3</button>
          <button onClick={this.handleClick} className="btn" value="7">0</button>
          
          <button onClick={this.handleClick} className="btn btn__operator equals" value="=">=</button>
          </div>
        </div>

    );
  }
}

export default App;
