import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    displayValue: '0'
  }

  inputDigit = digit => {
    const { displayValue } = this.state

    this.setState({
      displayValue: displayValue === '0' ? String(digit) : displayValue + digit
    })
  }

  inputDecimal = decimal => {
    const { displayValue } = this.state

    //prevents more than one decimal being entered
    if(displayValue.includes(decimal) === false) {
      this.setState({
        displayValue: displayValue + decimal
      })
    }
    
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
          

          <button onClick={ () => this.inputDigit(7)} className="btn" value="7">7</button>
          <button onClick={ () => this.inputDigit(8)} className="btn" value="8">8</button>
          <button onClick={ () => this.inputDigit(9)} className="btn" value="9">9</button>
          <button  className="btn btn__operator" value="+">+</button>
          
          <button onClick={ () => this.inputDigit(4)} className="btn" value="4">4</button>
          <button onClick={ () => this.inputDigit(5)} className="btn" value="5">5</button>
          <button onClick={ () => this.inputDigit(6)} className="btn" value="6">6</button>
          <button onClick={ () => this.inputDecimal('.')} className="btn btn__decimal" value=".">.</button>

          <button onClick={ () => this.inputDigit(1)} className="btn" value="7">1</button>
          <button onClick={ () => this.inputDigit(2)} className="btn" value="7">2</button>
          <button onClick={ () => this.inputDigit(3)} className="btn" value="7">3</button>
          <button onClick={ () => this.inputDigit(0)} className="btn" value="7">0</button>
          
          <button onClick={this.handleClick} className="btn btn__operator equals" value="=">=</button>
          </div>
        </div>

    );
  }
}

export default App;
