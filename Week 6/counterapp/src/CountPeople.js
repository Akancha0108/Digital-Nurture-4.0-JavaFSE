import React, { Component } from 'react';

class CountPeople extends Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <button onClick={this.updateEntry} style={{ backgroundColor: 'lightgreen', marginRight: '50px' }}>
          Login
        </button>
        <span style={{ fontWeight: 'bold' }}>{this.state.entrycount} People Entered!!!</span>

        <br /><br />

        <button onClick={this.updateExit} style={{ backgroundColor: 'lightgreen', marginRight: '50px' }}>
          Exit
        </button>
        <span style={{ fontWeight: 'bold' }}>{this.state.exitcount} People Left!!!</span>
      </div>
    );
  }
}

export default CountPeople;
