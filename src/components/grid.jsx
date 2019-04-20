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
          name : 'hello a',
          date : '14.04.2018',
          color : 'red' ,
          week : 5
        }
      ],
      grid : []
    }
  }
  whichWeek(date){ 
    let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let thisDate = new Date(date.replace(pattern,'$3-$2-$1'));
    return Math.round((thisDate - this.state.baseDate) / (7 * 24 * 60 * 60 * 1000));
  }

  componentWillMount(){
    let i
    let newgrid= []
    for(i=1;i<=5200;i++){
      let eventbox = {
        name : '',
        date : '',
        week : i,
        class : ''
      }
      //adding birthday logic
      if(i%52 === 1){
        eventbox.class = 'birthday'
      }
      else if(i<100){
        eventbox.class = 'past'
      }
      else if(i===100){
        eventbox.class = 'present'
      }
      else{
        eventbox.class = 'future'
      }
      newgrid.push(eventbox)
    }
    this.state.events.forEach(event => {
      newgrid[event.week] = event
      console.log(newgrid)
      this.setState({
        grid : newgrid
      });
    });
  }

  render() {
    return (
      <div className="grid-box">
      {this.state.grid.map((item) => 
        <Eventbox key={item.week} date={item.date} color={item.color} class={item.class}/>
      )}
      </div>
    )
  }
}

export default Grid


/* To-Do
- formatting according to  1) past/future 2) birthdays
- fetch data from DB [ add birthday logic to db ]
- 
*/