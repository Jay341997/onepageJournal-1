import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../actions'
import './addevent.css'
export class AddEvent extends Component {
  constructor(props){
    super(props)
    this.state = {
      form : {
        name : '',
        date : '',
        color : '#ffffff',
      }
    }
  }
  handleChange = event => {
    event.preventDefault();
    let property = event.target.name
    let value = event.target.value
    this.setState({
      form : { 
        ...this.state.form, 
        [property] : value
      }
    })
  }
  handleSubmit = event => {
    event.preventDefault();   
    this.props.dispatch(addEvent(this.state.form))
  }
  render() {
    return (
      <div >
        <form class="add-event" onSubmit={this.handleSubmit}>
            <div>
              <h3>Add event</h3>
            </div>
            <div>
              <label>Name</label>
              <input 
                type='text' 
                name='name' 
                value={this.state.form.name} 
                onChange={this.handleChange}>
              </input>
            </div>
            <div>
              <label>Date</label>
              <input 
                type='date' 
                name='date' 
                value={this.state.form.date} 
                onChange={this.handleChange}>
              </input>
            </div>
            <div>
              <label>Color</label>
              <input 
                type='color'
                name='color'
                value={this.state.form.color}
                onChange={this.handleChange}>
              </input>
            </div>
            <input id='submit' type='submit'></input>
        </form>
      </div>
    )
  }
}

export default connect()(AddEvent)