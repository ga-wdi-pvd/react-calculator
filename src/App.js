import React, { Component } from 'react';
// import logo from './logo.svg';
import Add from './Add';
import Sub from './Sub';
import Tim from './Tim';
import Div from './Div';
import './App.css';


class App extends Component {

  render() {
    return (
            <div>
                  <h1> Ara finally made a calculator with REACT </h1>

                  <Add/>
                  <Sub/>
                  <Tim/>
                  <Div/>
            </div>
    );
  }//render
}//app

export default App;
