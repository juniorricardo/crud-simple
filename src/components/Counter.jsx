import React from 'react'
import { connect } from 'react-redux'
import {
  increment_action,
  decrement_action
} from './redux/actions/counterActions'
// import './counter.css'

class Counter extends React.Component {
  increment = () => {
    // DISPATCH (store) -> ejecutar <!--
    this.props.dispatch(increment_action(5))
  }
  decrement = () => {
    this.props.dispatch(decrement_action())
  }

  novem = () => {
    return this.state.name
  }

  render () {
    return (
      <div className='col-md-3 card bg-light'>
        <div className='container'>
          <h2 className='text-center'> Counter </h2>
          <div className='d-flex flex-column px-2 py-2'>
            <button className='btn btn-success mx-1' onClick={this.decrement}>
              Decrement
            </button>
            <span className='text-center'> {this.props.count} </span>
            <button className='btn btn-success mx-1' onClick={this.increment}>
              Increment
            </button>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    count: state.counter.count
  }
}

export default connect(mapStateToProps)(Counter)
