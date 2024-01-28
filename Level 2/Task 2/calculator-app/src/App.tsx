import { Component } from "react";
import "./App.css";

interface State {
  displayValue: string;
  operator: string | null;
  waitingForOperand: boolean;
  storedValue: string | null;
}

class Calculator extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      displayValue: "0",
      operator: null,
      waitingForOperand: false,
      storedValue: null,
    };
  }

  inputDigit = (digit: number) => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue:
          displayValue === "0" ? String(digit) : displayValue + digit,
      });
    }
  };

  inputDecimal = () => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: "0.",
        waitingForOperand: false,
      });
    } else if (displayValue.indexOf(".") === -1) {
      this.setState({
        displayValue: displayValue + ".",
      });
    }
  };

  clearDisplay = () => {
    this.setState({
      displayValue: "0",
    });
  };

  performOperation = (nextOperator: string) => {
    const { displayValue, operator, storedValue } = this.state;

    if (storedValue === null) {
      this.setState({
        storedValue: displayValue,
        waitingForOperand: true,
        operator: nextOperator,
      });
    } else if (operator) {
      const result = this.calculate(
        parseFloat(storedValue),
        parseFloat(displayValue),
        operator
      );
      this.setState({
        displayValue: String(result),
        storedValue: String(result),
        waitingForOperand: true,
        operator: nextOperator,
      });
    }
  };

  calculate = (value1: number, value2: number, operator: string) => {
    switch (operator) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
      default:
        return value2;
    }
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator container">
        <div>
          <input className="display" value={displayValue} readOnly />
          <div className="buttons">
            <div className="button-row">
              <button onClick={() => this.clearDisplay()}>AC</button>
              <button onClick={() => this.performOperation("/")}>/</button>
            </div>
            <div className="button-row">
              <button onClick={() => this.inputDigit(7)}>7</button>
              <button onClick={() => this.inputDigit(8)}>8</button>
              <button onClick={() => this.inputDigit(9)}>9</button>
              <button onClick={() => this.performOperation("*")}>*</button>
            </div>
            <div className="button-row">
              <button onClick={() => this.inputDigit(4)}>4</button>
              <button onClick={() => this.inputDigit(5)}>5</button>
              <button onClick={() => this.inputDigit(6)}>6</button>
              <button onClick={() => this.performOperation("-")}>-</button>
            </div>
            <div className="button-row">
              <button onClick={() => this.inputDigit(1)}>1</button>
              <button onClick={() => this.inputDigit(2)}>2</button>
              <button onClick={() => this.inputDigit(3)}>3</button>
              <button onClick={() => this.performOperation("+")}>+</button>
            </div>
            <div className="button-row">
              <button onClick={() => this.inputDigit(0)}>0</button>
              <button onClick={() => this.inputDecimal()}>.</button>
              <button onClick={() => this.performOperation("=")}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
