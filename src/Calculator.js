import React, { Component } from 'react';

class Calculator extends Component {

  constructor(){
    super();
    this.state = {
      value1: '',
      value2: '',
      operation: ''
    };
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('calculating...');
  }

  render() {
    return (
      <div>
        <h1>its working!</h1>
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          <input type="text" name="value1" />
            <select>
              <option value="*">x</option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="/">÷</option>
            </select>
          <input type="text" name="value2" />
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  }
}

export default Calculator;
