import React, { Component } from 'react';

class Calculator extends Component {

  constructor(){
    super();
    this.state = {
      value1: '',
      value2: '',
      total: 0
    };
  }

  handleValue1(event){
    this.setState({
      value1: event.target.value
    })
  }

  handleValue2(event){
    this.setState({
      value2: event.target.value
    })
  }

  handleSubmit(event){
    this.setState({
      total: 0
    })
    event.preventDefault();
    console.log('calculating...');
    var total = parseInt(this.state.value1) + parseInt(this.state.value2)
    this.setState({
      total: total
    })
  }

  render() {
    return (
      <div>
        <h1>its working!</h1>
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          <input onChange={(event) => {this.handleValue1(event)}} type="text" name="value1" />
          <h4>+</h4>
          <input onChange={(event) => {this.handleValue2(event)}} type="text" name="value2" />
          <button type="submit">Calculate</button>
          <h1>{this.state.total}</h1>
        </form>
      </div>
    );
  }
}

export default Calculator;
