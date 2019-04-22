import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addEvent } from '../actions'

export class AddEvent extends Component {
  constructor(props){
    super(props)
    this.state = {
      form : {
        name : '',
        date : Date.now(),
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
    let week = 5
    this.props.dispatch(addEvent(this.state.form.name,this.state.form.color,this.state.form.date,week))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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