import React, { Component } from 'react'
import './eventbox.css'

export default class Eventbox extends Component {
  constructor(props){
    super(props);
    this.state = {  
      color : 'black'
    }
  }
  render() {
    let styles={
      background : this.state.color
    }
    return (
      <div 
        className="eventbox" 
        style={styles}
      />
    )
  }
}
