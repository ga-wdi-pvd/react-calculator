import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
      super(props);
      this.state = {
        number1: 0,
        number2: 0,
        total: 0
      };
      this.addNumbers = this.addNumbers.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
    }

    addNumbers(event){
      var total = (parseInt(this.state.number1) + parseInt(this.state.number2));
      this.setState({total: total})
    }
    handleChange1(event){
      this.setState({number1: event.target.value});
    }
    handleChange2(event){
      this.setState({number2: event.target.value});
    }


    render(){
        return(
            <div className="container">
              <h1>Add with React!</h1>

              <div className="add">
              <form onSubmit={this.addNumbers}>
                  <input type="text"
                        value={this.state.number1}
                        onChange={this.handleChange1}
                  />
                  <br />
                  <span>+</span>
                  <br />
                  <input type="text"
                        value={this.state.number2} onChange={this.handleChange2}
                  />
                  <br />
                  <button type="button" onClick={this.addNumbers}> = </button>
                </form>
                <h3>{this.state.total}</h3>
              </div>
            </div>
        )
    }
}
export default Calculator;
