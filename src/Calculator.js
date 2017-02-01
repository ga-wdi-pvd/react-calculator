import React from 'react';
import Operand from './Operand';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operands: [0, 0],
      sum: 0
    };
  }
  handleChange = (e) => {
    const operands = this.state.operands.slice();
    let index = parseInt(e.target.dataset.index, 10);
    let value = (parseFloat(e.target.value) || 0);
    operands[index] = value;
    this.setState({
      operands: operands,
      sum: operands.reduce((acc, cur) => acc+cur, 0)
    });
  }
  renderOperand(i) {
    return (
      <Operand
        value={this.state.operands[i]}
        index={i}
        handleChange={this.handleChange}
      />
    );
  }
  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          {this.renderOperand(0)}
          <span>+</span>
          {this.renderOperand(1)}
          <span>=</span>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
