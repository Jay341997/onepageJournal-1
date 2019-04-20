import React, { Component } from 'react'
import './eventbox.css'

export default class Eventbox extends Component {
  constructor(props){
    super(props);
    this.state = {  
      name : this.props.name,
      date : this.props.date,
      color : this.props.color
    }
  }
  render() {
    return (
      <div 
        className="eventbox" 
        title = {this.state.name}
        style={{background:this.state.color}}
      />
    )
  }
}
