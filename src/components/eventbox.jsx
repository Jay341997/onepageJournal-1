import React, { Component } from 'react'
import { connect } from 'react-redux';
import './eventbox.css'

class Eventbox extends Component {
  render(){

    let className = this.props.data.class
    let eventinfo = this.props.data.tooltiptext 
    let style = {
      background : ''
    }
    eventinfo  += this.props.eventdata.map(item  => {
      console.log(item)
      if(item){
        return item.date + ":" + item.name + "\n"
      }
    })

    if(this.props.eventdata.length > 0){
      if(this.props.eventdata.length > 1){
        className += 'multi-event '
      }
      else{
        className += 'single-event '
        style.background = this.props.eventdata[0].color
      }
    }
    return (
      <div className={className} style = {style} >
        <div className="tooltiptext">{eventinfo}</div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  eventdata :  getEventsById(state.events,ownProps.data.events)
});

const getEventsById = (events , eventIds ) => {
  let eventdata = eventIds.map(element => {
    return events[element]
  })
  return eventdata
}
export default connect(mapStateToProps)(Eventbox);