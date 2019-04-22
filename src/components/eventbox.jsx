import React, { Component } from 'react'
import './eventbox.css'

export default class Eventbox extends Component {
  constructor(props){
    super(props);
    this.state = {  
      name : this.props.name,
      date : this.props.date,
      class : this.props.class,
      color : this.props.color,
    }
  }
  render(){
    let tempclassName = this.state.class + " eventbox"  
    let tempStyle
    if(this.state.name !== ''){
      tempStyle = { background : this.state.color}
      tempclassName += " tooltip"
    }
    return (
      <div className= {tempclassName} style = {tempStyle} >
        {this.state.name && <div className="tooltiptext">{this.state.date}:{this.state.name}</div>}
      </div>
    )
  }
}
