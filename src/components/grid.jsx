/* eslint-disable no-undef */
import React, { Component } from 'react'
import Eventbox from './eventbox'
import { connect } from 'react-redux';
import './grid.css'


const mapStateToProps = function(state){
  return {
    events: state,
  }
}

export class Grid extends Component {
  constructor(props){
    super(props);
    this.state = {
      initDate : '15/05/1998',
      events : [
        {
          name : 'hello a',
          date : '14/04/2018',
          color : 'red' ,
          week : 5,
          class : 'event'
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
        eventbox.class += 'event '
        eventbox.date += this.state.initDate+ (i-1)/52
        if(i<=2000){
          eventbox.name += "You became "+ (i-1)/52 + " years old" 
        }else{
          eventbox.name += "You will be "+ (i-1)/52 + " years old" 
        }
      }
      if(i<2000){
        eventbox.class += 'past '
      }
      else if(i===2000){
        eventbox.class += 'present '
      }
      else{
        eventbox.class += 'future '
      }
      newgrid.push(eventbox)
    }    
    this.state.events.forEach(event => {
      newgrid[event.week-1] = event
    });
    this.setState({
      grid : newgrid
    });
  }

  render() {
    return (
      <div className="grid-box">
      {this.props.events.map((item) => 
        //change to grid if local render
        <Eventbox key={item.week} date={item.date} color={item.color} class={'event '+ item.eventclass} name={item.name}/>
      )}
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(Grid)

/* To-Do
- formatting according to  1) past/future 2) birthdays
- fetch data from DB [ add birthday logic to db ]
- 
*/