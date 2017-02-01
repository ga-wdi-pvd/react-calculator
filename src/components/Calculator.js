import React, { Component } from 'react';
import "../App.css"
class Calculator extends Component {
  constructor(props){
      super(props);
      this.state = {
        number1: 0,
        number2: 0,
        total: 0,
        operator: "+"
      };
      this.addNumbers = this.addNumbers.bind(this);
      this.subtractNumbers = this.subtractNumbers.bind(this);
      this.multiplyNumbers = this.multiplyNumbers.bind(this);
      this.divideNumbers = this.divideNumbers.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
    }

    addNumbers(event){
      var total = (parseInt(this.state.number1, 10) + parseInt(this.state.number2, 10));
      this.setState({total: total})
      this.setState({operator: "+"})
    }
    subtractNumbers(event){
      var total = (parseInt(this.state.number1, 10) - parseInt(this.state.number2, 10));
      this.setState({total: total})
      this.setState({operator: "-"})

    }
    multiplyNumbers(event){
      var total = (parseInt(this.state.number1, 10) * parseInt(this.state.number2, 10));
      this.setState({total: total})
      this.setState({operator: "x"})

    }
    divideNumbers(event){
      var total = (parseInt(this.state.number1, 10) / parseInt(this.state.number2, 10));
      this.setState({total: total})
      this.setState({operator: "/"})

    }
    handleChange1(event){
      this.setState({number1: event.target.value});
    }
    handleChange2(event){
      this.setState({number2: event.target.value});
    }
    setOperator(event){
      this.setOperator({operator: event.target.value});
      console.log(this.state.operator);
    }

    render(){
        return(
            <div className="container">
              <h1>Basic React Calculator!</h1>
              <p>Put in the numbers and click the button for which operator you want to use</p>
              <div className="calculator">
              <form onSubmit={this.addNumbers}>
                  <input type="number"
                        value={this.state.number1}
                        onChange={this.handleChange1}
                        />
                  <input type="number"
                        value={this.state.number2}
                        onChange={this.handleChange2}
                        />
                      <br />
                    <button type="button" onClick={this.addNumbers}>&#43;</button>
                    <button type="button" onClick={this.subtractNumbers}>&#8722;</button>
                    <button type="button" onClick={this.multiplyNumbers}>&#215;</button>
                    <button type="button" onClick={this.divideNumbers}>&#247;</button>
                </form>
                <h3>{this.state.total}</h3>
              </div>
            <div className="box">

                <h1 className="displayCalc">{this.state.number1}</h1>
                <h1 className="displayCalc">{this.state.operator}</h1>
                <h1 className="displayCalc">{this.state.number2}</h1>
                <h1 className="displayCalc">=</h1>
                <h1 className="displayCalc">{this.state.total}</h1>

            </div>



            </div>
        )
    }
}
export default Calculator;
