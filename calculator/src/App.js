import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    displayValue: '0',
    operator: null,
    firstValue: null,
    secondValue: false
  }

  inputDigit = digit => {
    const { displayValue, secondValue } = this.state

    if(secondValue){
      this.setState({
        displayValue: String(digit),
        secondValue: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      });
     
    }
  console.log(this.state)
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

  clearInput = _ => {
    this.setState({
      displayValue: '0'
    })
  }



  inputOperator = operate => {
    const { displayValue, firstValue, operator } = this.state 

    const calculateResult = (prevVal, secondVal) => {
    
      const { operator } = this.state

      if(operator === '*') {
        return prevVal * secondVal
      }
      if(operator === '/') {
        return prevVal / secondVal
      }
      if(operator === '+') {
        return prevVal + secondVal
      }
      if(operator === '-') {
        return prevVal - secondVal
      }
      if(operator === '=') {
        return secondVal
      }
    }

    const inputVal = parseFloat(displayValue)

    if(firstValue === null) {
      this.setState({
        firstValue: inputVal
      });
    } else if (operator) {
      const result = calculateResult(firstValue, inputVal)
      this.setState({
        firstValue: result,
        displayValue: String(result)
      });
    }
  
    this.setState({
      secondVal: true,
      operator: operate
    });
    console.log(this.state)
  }

  render() {
    const { displayValue } = this.state
    return (
        <div className="container">
        <div className="display"> { displayValue }</div>

        <div className="buttons">
          <button onClick={ () => this.clearInput} className="btn btn__clear" value="clear">C</button>
          <button onClick={ () => this.inputOperator('/')} className="btn btn__operator" value="/">&divide;</button>
          <button onClick={ () => this.inputOperator('*')} className="btn btn__operator" value="*">&times;</button>
          <button onClick={ () => this.inputOperator('-')} className="btn btn__operator" value="-">-</button>
          

          <button onClick={ () => this.inputDigit(7)} className="btn" value="7">7</button>
          <button onClick={ () => this.inputDigit(8)} className="btn" value="8">8</button>
          <button onClick={ () => this.inputDigit(9)} className="btn" value="9">9</button>
          <button onClick={ () => this.inputOperator('+') } className="btn btn__operator" value="+">+</button>
          
          <button onClick={ () => this.inputDigit(4)} className="btn" value="4">4</button>
          <button onClick={ () => this.inputDigit(5)} className="btn" value="5">5</button>
          <button onClick={ () => this.inputDigit(6)} className="btn" value="6">6</button>
          <button onClick={ () => this.inputDecimal('.')} className="btn btn__decimal" value=".">.</button>

          <button onClick={ () => this.inputDigit(1)} className="btn" value="7">1</button>
          <button onClick={ () => this.inputDigit(2)} className="btn" value="7">2</button>
          <button onClick={ () => this.inputDigit(3)} className="btn" value="7">3</button>
          <button onClick={ () => this.inputDigit(0)} className="btn" value="7">0</button>
          
          <button onClick={ () => this.inputOperator('=') } className="btn btn__operator equals" value="=">=</button>
          </div>
        </div>

    );
  }
}

export default App;
