import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
      userInput: ""
  };

  userInputHandler = (event) => {
      this.setState({
         userInput: event.target.value
      });
  };

  render() {
    return (
      <div className="App">
          <UserInput currentInput={this.state.userInput} onChange={this.userInputHandler}/>
          <UserOutput userInput={this.state.userInput}/>
          <UserOutput userInput={this.state.userInput}/>
      </div>
    );
  }
}

export default App;
