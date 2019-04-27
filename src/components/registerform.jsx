import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createGrid } from '../actions'

export class RegisterForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      form : {
        username : 'dhruv',
        birthdate : '1998-05-15',
        lifespan : 100,
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
    this.props.dispatch(createGrid(this.state.form))
    this.props.redirect();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
              <label>Username</label>
              <input 
                type='text' 
                name='username' 
                value={this.state.form.username} 
                onChange={this.handleChange}>
              </input>
            </div>
            <div>
              <label>Birthdate</label>
              <input 
                type='date' 
                name='birthdate' 
                value={this.state.form.birthdate} 
                onChange={this.handleChange}>
              </input>
            </div>
            <div>
              <label>lifespan</label>
              <input 
                type='number'
                name='lifespan'
                value={this.state.form.lifespan}
                onChange={this.handleChange}>
              </input>
            </div>
            <input id='submit' type='submit'></input>
        </form>
      </div>
    )
  }
}

export default connect()(RegisterForm)