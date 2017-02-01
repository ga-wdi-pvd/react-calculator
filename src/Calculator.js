import React, {Component} from "react";

 class Calculator extends Component {
   constructor(props) {
      super(props);
      this.state = {
        result: null,
        in1: '',
        in2: '',
        op: '+'
        };
   }
   handleIn1(e) {
     this.setState({
       in1: Number(e.target.value) ? Number(e.target.value) : ''
     },()=> this.compute());
    //  this.compute();
    }
   handleIn2(e) {
     this.setState({
       in2: Number(e.target.value) ? Number(e.target.value) : ''
     },()=> this.compute());
    //  this.compute();
   }
   handleOp(e) {
     this.setState({
       op: e.target.value
     },()=> this.compute());
    //  this.compute();
   }

   compute() {
     console.log('here',this.state.op, this.state.in1, this.state.in2);
     switch (this.state.op) {
       case "+":
          this.setState((prevState,props) => ({
              result: prevState.in1 + prevState.in2
          }));
          break;
       case "-":
          this.setState((prevState,props) => ({
              result: prevState.in1 - prevState.in2
          }));
          break;
       case "*":
          this.setState((prevState,props) => ({
              result: prevState.in1 * prevState.in2
          }));
          break;
       case "/":
          this.setState((prevState,props) => ({
              result: prevState.in1 / prevState.in2
          }));
          break;
       default:
          console.log('Unknown Operator');
     }
   }

   render(){
     return (
       <div className="container">
         <h1>Calculate with React!</h1>

         <div className="add">
           <input type="text" placeholder="" onChange={(evt) => this.handleIn1(evt)} value={this.state.in1} />

           <select onChange={(evt) => this.handleOp(evt)} value={this.state.op}>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">x</option>
              <option value="/">&divide;</option>
           </select>

           <input type="text" placeholder="" onChange={(evt) => this.handleIn2(evt)} value={this.state.in2} />

           <span>=</span>
           <h3>Results go here!</h3>
           <h2>{this.state.result}</h2>
         </div>
       </div>
    )
  }
}

export default Calculator
