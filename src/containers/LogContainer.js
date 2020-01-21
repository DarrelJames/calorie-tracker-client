import React, { Component } from 'react'
// import Log from '../components/Log'
import MealGroup from './MealGroup'
import { fetchLogs } from '../actions'
import { connect } from 'react-redux'

class LogContainer extends Component {
  // state = {
  //   date: this.props.logs.logs.date
  // }
  componentDidMount() {
    this.props.fetchLogs()
  }

  render() {    
    return (
      <div>
        <div>back</div>
        <div>back</div>
        <MealGroup category="Breakfast" />
        <MealGroup category="Lunch" />
        <MealGroup category="Dinner" />
        <MealGroup category="Snacks" />
      </div>
    );
  }

}

const mapStateToProps = ({ logs }) => {
  return {logs}
}

export default connect(mapStateToProps, { fetchLogs })(LogContainer)
