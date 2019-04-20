import React, { Component } from 'react'
import Eventbox from './eventbox'
import './grid.css'

export class Grid extends Component {

  constructor(props){
    super(props);
    this.state = {
      initDate : '15.05.1998',
      events : [
        {
          id : 'a',
          name : 'hello a',
          date : '14.04.2018',
          color : 'red' ,
          week : 5
        }
      ],
    }
  }
  whichWeek(date){ 
    let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let thisDate = new Date(date.replace(pattern,'$3-$2-$1'));
    return Math.round((thisDate - this.state.baseDate) / (7 * 24 * 60 * 60 * 1000));
  }
  init(){
    //this.initDate();
    //this.initGrid();
    //this.initEvents();
  }

  initGrid(){
    let i
    let boxes= []
    for(i=1;i<=10;i++){
      //add past & future
      //add birthdays
      let eventbox = <Eventbox key={i}/>
      boxes.push(eventbox)
    }
    return boxes
  }
  initEvents(){
    let boxes = []
    this.state.events.forEach(event => {
      console.log(event)
      let eventbox = <Eventbox name={event.name} date={event.date} color={event.color} key={event.week}/>
      boxes.push(eventbox)
    });
    console.log(boxes)
    return boxes
  }
  render() {
    return (
      <div className="grid-box">
        {this.initGrid()}
        {this.initEvents()}
      </div>
    )
  }
}

export default Grid
