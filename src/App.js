import React, { Component } from 'react';
import Grid from './components/grid'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>One-Page Journal</h1>
        <Grid/>
      </div>
    );
  }
}

export default App;
