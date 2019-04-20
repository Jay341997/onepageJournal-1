import React, { Component } from 'react'
import './eventbox.css'

export default class Eventbox extends Component {
  constructor(props){
    super(props);
    this.state = {  
      name : this.props.name,
      date : this.props.date,
      class : this.props.class,
      color : this.props.color
    }
  }
  render(){
    let tempclassName = "eventbox " + this.state.class
    let tempStyle
    if(this.state.color !== ''){
      tempStyle = {
        background : this.state.color
      }
    }
    return (
      <div 
        className= {tempclassName}
        title = {this.state.name}
        style = {tempStyle}
      />
    )
  }
}

/* To-Do **
- add tooltip
- add 
*/
