import React, { Component } from 'react';
import Timer from './Timer'

class App extends Component {
  state = {
    timerIDs: []
  }

  componentDidMount() {
    // Call handleAddTimer to add a Timer component to the state
    this.handleAddTimer();
  }

  handleAddTimer = () => {
    // Generate a unique ID for each Timer component
    const newTimerID = Math.random();
    
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, newTimerID]
    }));
  }

  handleRemoveTimer = (id) => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timerID => timerID !== id)
    }));
  }

  render() {
    const { timerIDs } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleAddTimer}>Add Timer</button>
        <div className="TimerGrid">
          {timerIDs.map(id => (
            <Timer key={id} id={id} removeTimer={this.handleRemoveTimer} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;