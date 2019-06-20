import React, { Component } from 'react';
import './App.css';
import { InputButtons } from './components/InputButtons';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

  //Negates the requirement to bind to this.
  enterInput = val => {
    this.setState({input: this.state.input + val});
  }

  //Handles the functionality of the equals button:
  //Performs the addition, subtraction, multiplication, and division logic.
  handleEqual = () => {
    var expression = this.state.input;
    var leftAndRightOperand;

    if (this.state.input.includes('+')) {
      leftAndRightOperand = expression.split('+');
      this.setState({input: parseInt(leftAndRightOperand[0]) + parseInt(leftAndRightOperand[1])});
    } else if (this.state.input.includes('-')) {
      //Doesn't handle negatives properly***********
      leftAndRightOperand = expression.split('-');
      this.setState({input: parseInt(leftAndRightOperand[0] - parseInt(leftAndRightOperand[1]))});
    } else if (this.state.input.includes('*')) {
      leftAndRightOperand = expression.split('*');
      this.setState({input: parseInt(leftAndRightOperand[0] * parseInt(leftAndRightOperand[1]))});
    } else if (this.state.input.includes('/')) {
      leftAndRightOperand = expression.split('/');
      this.setState({input: parseInt(leftAndRightOperand[0] / parseInt(leftAndRightOperand[1]))});
    }
  }

  render() {
    return (
      <header>
        <h1>Dan's Calculator</h1>

      <div className= 'app'>
        <div className= 'calc'>
          <Input input= {this.state.input}></Input>
          <div className= 'row'>
            <InputButtons handleClick= {this.enterInput}>7</InputButtons>
            <InputButtons handleClick= {this.enterInput}>8</InputButtons>
            <InputButtons handleClick= {this.enterInput}>9</InputButtons>
            <InputButtons handleClick= {this.enterInput}>/</InputButtons>
            </div>
            <div className= 'row'>
            <InputButtons handleClick= {this.enterInput}>4</InputButtons>
            <InputButtons handleClick= {this.enterInput}>5</InputButtons>
            <InputButtons handleClick= {this.enterInput}>6</InputButtons>
            <InputButtons handleClick= {this.enterInput}>+</InputButtons>
            </div>
            <div className= 'row'>
            <InputButtons handleClick= {this.enterInput}>1</InputButtons>
            <InputButtons handleClick= {this.enterInput}>2</InputButtons>
            <InputButtons handleClick= {this.enterInput}>3</InputButtons>
            <InputButtons handleClick= {this.enterInput}>*</InputButtons>
            </div>
            <div className= 'row'>
            <InputButtons handleClick= {this.enterInput}>.</InputButtons>
            <InputButtons handleClick= {this.enterInput}>0</InputButtons>
            <InputButtons handleClick= {this.handleEqual}>=</InputButtons>
            <InputButtons handleClick= {this.enterInput}>-</InputButtons>
            </div>
            <div className= 'row'>
              <ClearButton handleClear={() => this.setState({input: ''})}>
                Clear Screen
              </ClearButton>
            </div>
        </div>
      </div>
      </header>
    );
  }
}

export default App;