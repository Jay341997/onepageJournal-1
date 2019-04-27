import React, { Component } from 'react'
import Eventbox from './eventbox'
import { connect } from 'react-redux';
import './grid.css'
class Grid extends Component {
  componentWillUpdate(){
    console.log('update');
  }
  render() {
      console.log('rerender')
      let grid = this.props.grid.map((item,index) => {  
            return <Eventbox key={index} data={item}/>
      })
    return (
      <div className="grid-box">     
        {grid} 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    grid: state.grid
  }
}
export default connect(mapStateToProps, null)(Grid)
