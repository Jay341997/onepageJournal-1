import React, { Component } from 'react';
import Grid from './components/grid'
import AddEvent from './containers.js/addevent'
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className='header'>
          <h1>One-Page Journal</h1>
          <AddEvent/>
        </div>
        <Grid/>
      </div>
    );
  }
}

export default App;
