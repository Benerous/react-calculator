import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ResultComponent from './components/ResultComponent';
import KeypadComponent from './components/KeypadComponent'

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  };

  onClick = button => {
    this.setState({
      result: ""
    });

    if (button === "=") {
      this.calculate();
    }

    else if (button === "C") {
      this.reset();
    }

    else if (button === "CE") {
      this.backspace();
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    if (this.state.result === "error") {
      this.setState({
        result: ""
      })
    } else {
      this.setState({
        result: this.state.result.slice(0, -1)
      });
    }
  };

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3 mx-auto mt-4">
            <h3 className="text-capitalize text-center mb-5">Calculator</h3>
            <ResultComponent
            result={this.state.result}
            />
            <KeypadComponent 
            onClick={this.onClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
