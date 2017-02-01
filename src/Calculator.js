import React, { Component } from 'react';

class Calculator extends Component {

  constructor(){
    super();
    this.state = {
      value1: '',
      value2: '',
      operation: '',
      total: 0
    };
  }

  handleValue1(event){
    this.setState({
      value1: parseInt(event.target.value)
    })
  }

  handleValue2(event){
    this.setState({
      value2: parseInt(event.target.value)
    })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('calculating...');
    console.log(Number.isInteger(this.state.value1));
    console.log(Number.isInteger(this.state.value2));
  }

  render() {
    return (
      <div>
        <h1>its working!</h1>
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          <input onChange={(event) => {this.handleValue1(event)}} type="text" name="value1" />
            <select>
              <option value="*">x</option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="/">÷</option>
            </select>
          <input onChange={(event) => {this.handleValue2(event)}} type="text" name="value2" />
          <button type="submit">Calculate</button>
        </form>
      </div>
    );
  }
}

export default Calculator;
